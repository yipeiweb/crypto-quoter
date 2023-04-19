import React from 'react'
import Error from '../Error/Error'
import styledComponents from "../../styledComponents/form.styles";
import useSelectMoneys from '../../hooks/useSelectMoneys/useSelectMoneys'
import data from '../../data/data'
import { useState,useEffect } from 'react'
import { onCallApi, onHandleSubmit } from "../../components/Form/form.controller"

const Form = ({setMoneys}) => {
    const [error, setError] = useState(false)
    const [cryptoMoney, setCryptoMoney] = useState([])
    const [selectedMoney, SelectMoneys] = useSelectMoneys('Elige tu moneda', data)
    const [selectedCryptomoney, SelectCryptomoneys] = useSelectMoneys('Elige tu criptomoneda', cryptoMoney)
    
    useEffect(() => {onCallApi(setCryptoMoney)}, [])
    
    const handleSubmit =  e => {
        onHandleSubmit(e, selectedMoney, selectedCryptomoney, setError, setMoneys)
    }

    const {InputSubmit} = styledComponents
  return (
    <>
        {error && <Error text={'Todos los campos son obligatorios'} />}
        <form onSubmit={handleSubmit}>
            <SelectMoneys />
            <SelectCryptomoneys />
            <InputSubmit type="submit" value="Cotizar" />
        </form>    
    </>
  )
}

export default Form