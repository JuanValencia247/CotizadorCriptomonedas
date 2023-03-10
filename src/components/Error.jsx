import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`
export const Error = ({ children }) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}
