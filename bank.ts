export class Account{
    constructor(private balances:number) {
        this.balances = balances;
    }

    yearPercentage: number = 0;
    monthlyIntrestRate: number = 10;
    months: number = 0;

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

    takeLoan(n:number){
        return this.balances = (- n);
    }
}
