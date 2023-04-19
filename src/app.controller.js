import moneyCryptoMoneyQuoter from './helper/moneyCryptoMoneyQuoter'

const onChangeMoneys = (moneys, setResult, setLoading) => {
  
  if(Object.keys(moneys).length > 0) {
    setLoading(true)
    const callApi = moneyCryptoMoneyQuoter(moneys).then(data =>
      setResult(data)
    )
    setLoading(false)
  }
}

export {onChangeMoneys}