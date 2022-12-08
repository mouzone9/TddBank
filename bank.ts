
export class Account {
    constructor(private balances: number, private history: Array<string> = []) {
        this.balances = balances;
        this.history = history;
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
}