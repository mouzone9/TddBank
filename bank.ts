export class Account{
    constructor(private balances:number) {
        this.balances = balances;
    }

    balance(){
        return this.balances;
    }

    addMoney =(n:number): number => {
        this.balances += n
        return this.balances
    }

    getMoney=(n:number): number=>{
        this.balances -= n
        return this.balances
    }
}