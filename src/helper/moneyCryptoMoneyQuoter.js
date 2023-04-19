export default async (moneys) => {
    const money = moneys.money;
    const cryptomoney = moneys.cryptomoney;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoney}&tsyms=${money}`
    const response = await fetch(url)
    const result =  await response.json()

    return result.DISPLAY[cryptomoney][money]
}