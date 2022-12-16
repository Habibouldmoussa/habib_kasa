import styled from 'styled-components'
const Stylefigure  = styled.figure`
background-image : url(${props => props.cover})
`
function Card(props) {
    return (
        <Stylefigure key={props.id} cover={props.cover}>
            <figcaption>{props.name}</figcaption>
        </Stylefigure>        
    )
}
export default Card