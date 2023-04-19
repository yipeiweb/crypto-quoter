export default async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const response =  await fetch(url)
    const json = await response.json()
    const data = json.Data

    return data.map(cryptomoney => {
        return {
            id: cryptomoney.CoinInfo.Name,
            name: cryptomoney.CoinInfo.FullName
        }
    })
}