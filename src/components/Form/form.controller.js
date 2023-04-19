import cryptomoneysTypeGetter from '../../helper/cryptomoneysTypeGetter'

const onCallApi = (setCryptoMoney) => {
    cryptomoneysTypeGetter().then(result => {
        setCryptoMoney(result)
    })
}

const onHandleSubmit = (e, money, cryptomoney, setError, setMoneys) => {
    e.preventDefault()

    if([money, cryptomoney].includes('')) {
        setError(true)
        return
    }

    setError(false)
    setMoneys({money,cryptomoney})
}

export {onCallApi, onHandleSubmit}