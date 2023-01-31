import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from '../public/img/criptomonedas.png'
import { Formulario } from './components/Formulario'
import { useEffect } from 'react'
import { Resultado } from './components/Resultado'
import { Spiner } from './components/Spiner'

const Contenedor = styled.div`
  max-width: 980px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 70px auto 0 auto;
  display: block;
  @media (min-width: 992px){
    margin: 170px auto 0 auto;
  }
`
const Heading = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 1.7em;
  @media (min-width: 992px){
    margin-top: 80px;
  }

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0  auto;
  }
`

function App() {

  const [monedas, setMonedas] =  useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() =>{
    if(Object.keys(monedas).length>0){

      const cotizarCripto = async() =>{
        setCargando(true)
        setResultado({})

        const {moneda, criptoMoneda} = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
      
      const respuesta =  await fetch(url)
      const resultado = await respuesta.json()

      setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
      
        setCargando(false)
    }

      cotizarCripto()
    }
  },[monedas])
  return (
    <Contenedor >
      <Imagen
        src={ImagenCripto}
        alt='Imagen Criptomonedas'
      />
      <div>
        <Heading>Cotiza Tus Criptomonedas</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spiner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
