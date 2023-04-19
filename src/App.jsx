import { useState,useEffect } from 'react'
import imageCrypto from './img/imagen-criptos.png'
import Form from './components/Form/Form'
import styledComponents from "./styledComponents/app.styles";
import {onChangeMoneys} from './app.controller'
import Result from './components/Result/Result';
import Spiner from './components/Spiner/Spiner';

function App() {
  const [moneys, setMoneys] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  
  const {Heading, Container, Image} = styledComponents
  
  useEffect(() => {onChangeMoneys(moneys, setResult, setLoading)}, [moneys])

  return (
    <Container>
        <Image src={imageCrypto} />
        <div>
            <Heading>Cotiza criptomonedas al instante</Heading>
            <Form setMoneys={setMoneys} />
            {loading && <Spiner />}
            {result.PRICE && <Result result={result} />}
        </div>
    </Container>
  )
}

export default App
