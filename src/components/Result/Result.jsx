import styledComponents from "../../styledComponents/result.styles"

const Result = ({result}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        result
    const {Container, Text, Image, Price} = styledComponents

  return (
    <Container>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} />
        <div>
            <Price>El precio es de: <span>{PRICE}</span></Price>
            <Text>Precio más alto del dia: <span>{HIGHDAY}</span></Text>
            <Text>Precio más bajo del dia: <span>{LOWDAY}</span></Text>
            <Text>Variación ultimas 24h: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Ùltima actualización: <span>{LASTUPDATE}</span></Text>
        </div>
    </Container>
  )
}

export default Result