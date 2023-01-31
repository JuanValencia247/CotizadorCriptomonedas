import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useSeleccionMonedas } from '../hooks/useSeleccionMonedas'
import { monedas } from './data/Monedas'
import { Error } from './Error'
const Btn = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    border-radius: 8px;
    font-size: 20px;
    text-transform: uppercase;
    transition: 300ms;
    margin-top: 30px;
    &:hover{
        cursor: pointer;
        background-color: #7a7dfe;
    }

`
export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SeleccionMonedas] = useSeleccionMonedas('Elige tu Moneda', monedas)
    const [criptoMoneda, SeleccionCriptoMoneda] = useSeleccionMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-apI.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            // console.log(resultado.Data);
            //console.log(resultado.Message);

            if (resultado.Message === 'Success') {
                const arrayCriptos = resultado.Data.map(cripto => {
                    //console.log(resulado.cripto.CoinInfo.FullName);
                    const objeto = {
                        id: cripto.CoinInfo.Name,
                        nombre: cripto.CoinInfo.FullName
                    }
                    //console.log(objeto);
                    return objeto
                })
                setCriptos(arrayCriptos)

            } else {
            }
        }
        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([moneda, criptoMoneda].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    }
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSubmit}>
                <SeleccionMonedas />
                <SeleccionCriptoMoneda />

                <Btn type="submit" value='Transformar' />
            </form>
        </>
    )
}
