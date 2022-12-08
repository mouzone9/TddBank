export class Account{
    constructor(private balances:number) {
        this.balances = balances;
    }
    amount(){
        return this.balances;
    }
    addMoney(n:number){
        this.balances += n
    }
    getMoney(n:number){
        if(this.balances<n) throw 'You don\'t have enough money, get a job'
        this.balances -= n
    }
}