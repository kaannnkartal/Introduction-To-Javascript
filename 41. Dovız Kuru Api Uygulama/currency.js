class Currency{
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_R9Bi3U2LzAiwahjbt4rycifVoTXGEk5hEt9fnLgo&base_currency="
    }


   async exchange(amount, firstCurrency, secondCurrency) {
       const response = (await ((await fetch(`${this.url}${firstCurrency}`)).json()));
       console.log(response.data[secondCurrency]);

      
       const exchangedResult = amount * response.data[secondCurrency];

       return exchangedResult;
    }
}