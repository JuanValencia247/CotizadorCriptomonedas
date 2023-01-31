import styled from "@emotion/styled"

const Contenedor = styled.div`
    margin-top: 20px;
    padding: 10px 0;
    color: #fff;  
    display: flex ;
    flex-direction: column;
    align-items: center;
    @media (min-width: 992px){
        gap: .8em;
        flex-direction: row;
  }
`
const Texto = styled.p`
    font-size: 18px;
    span{
      font-weight : 700;
    }
`
const Precio = styled.p`
    font-size: 28px;
    padding: 8px 0;
    span{
      font-weight : 700;
    }
`
const Imagen = styled.img`
    height: 150px;
    gap: 5rem;
`
export const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actulizacion: <span>{LASTUPDATE}</span></Texto>
            </div>

        </Contenedor>
    )
}
