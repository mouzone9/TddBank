
export class Account{
    constructor(private balances:number, private currentCurrency:string,private history: Array<string> = []) {
        this.balances = balances;
        this.history = history;
        this.currentCurrency = currentCurrency;
    }

    amount() {
        return this.balances;
    }

    addMoney(n: number) {
        this.balances += n
        this.history.push(n.toString())
    }

    getMoney(n: number) {
        if (this.balances < n) throw 'You don\'t have enough money, get a job'
        this.balances -= n
        this.history.push('-' + n.toString())
    }

    historyOperation() {
        return this.history
    }
    changeCurrency(currency:string){
        switch(currency){
            case 'dollar':
                if (this.currentCurrency == 'dollar'){
                    break;
                }
                this.balances *=0.9
            case 'euro':
                if (this.currentCurrency == 'euro'){
                    break;
                }
                this.balances *=1.1
        }
    }
}