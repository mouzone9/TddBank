
export class Account{
    constructor(private balances:number,
                private currentCurrency:string,
                private history: Array<string> = [],
                private beneficiary: Array<string> = []) {
        this.balances = balances;
        this.history = history;
        this.beneficiary = beneficiary;
        this.currentCurrency = currentCurrency;
    }

    amount(){
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
    takeLoan(n:number){
        return this.balances = (- n);
    }

    returnBeneficiary(){
        return this.beneficiary
    }
    addBeneficiary(beneficiary:string){
        this.beneficiary.push(beneficiary)
    }
    removeBeneficiary(beneficiary:string){
        this.beneficiary.splice(this.beneficiary.indexOf(beneficiary),1)
    }



}

export class Bank{
    constructor(private accounts:Array<Account> = []) {
        this.accounts = accounts;
    }

    addAccount(account:Account){
        this.accounts.push(account)
    }

    getAccount(account:Account){
        return this.accounts.find((acc)=>acc == account)
    }

    getAccounts(){
        return this.accounts
    }

    
    modifyAccount(n:number, devise:string, account:Account){
        this.accounts.splice(this.accounts.indexOf(account),1)
        account = new Account(n, devise)
        this.accounts.push(account);
    }

    removeAccount(account:Account){
        this.accounts = this.accounts.filter((acc)=>acc != account)
    }

    wireTransfer(account:Account,account2:Account,amount:number){
        account.getMoney(amount)
        account2.addMoney(amount)
    }
}

