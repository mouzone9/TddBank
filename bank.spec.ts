import { Account, Bank } from "./bank";
var account;
var bank;

beforeEach(() => {
    account = new Account(1000, 'euro');
})

describe('Account', () => {
    describe('getBalance', () => {
        it('Return balance account', () => {
            expect(account.amount()).toBe(1000)
        })
    })
    describe('addMoney', () => {
        it('Should return account balance after adding money', () => {
            account.addMoney(10)
            account.addMoney(200)
            expect(account.amount()).toBe(1210)
        })
    })
    describe('getMoney', () => {
        it('should return not enough money', () => {
            expect(() => account.getMoney(5000)).toThrow('You don\'t have enough money, get a job')
        })
        it('Should return account balance after getting money', () => {
            account.getMoney(500)
            account.getMoney(250)
            expect(account.amount()).toBe(250)
            account.getMoney(250)
            expect(account.amount()).toBe(0)
        })
    })
    
    describe('takeLoan', ()=>{
        it('should return the monthly payment', ()=> {
            account.takeLoan(1000)
            expect(account.amount(0)).toBe(-1000)
        })
    })


    describe('history of operation', () => {
        it('Should return account history operation add', () => {
            account.addMoney(10)
            account.addMoney(20)
            expect(account.historyOperation()).toEqual(['10', '20'])
        })

        it('Should return account history operation get', () => {
            account.getMoney(10)
            account.getMoney(20)
            expect(account.historyOperation()).toEqual(['-10', '-20'])
        })
    })

    
    describe('Change currency',()=>{
        it('should return new amount if change currency',()=>{
            const account2 = new Account(1000,'dollar')
            account.changeCurrency('dollar')
            account2.changeCurrency('dollar')
            expect(account.amount()).toBe(900)
            expect(account2.amount()).toBe(1000)
        })
        it('should return new amount if change currency',()=>{
            const account2 = new Account(1000,'dollar')
            account2.changeCurrency('euro')
            expect(account2.amount()).toBe(1100)
        })
    })


describe('Beneficiary',()=>{
    it('should return list of beneficiary',()=>{
        const account2 = new Account(1000,'dollar')
        expect(account2.returnBeneficiary()).toEqual([])
    })
    it('should add beneficiary',()=>{
        const account2 = new Account(1000,'dollar')
        account2.addBeneficiary('Bob')
        expect(account2.returnBeneficiary()).toEqual(['Bob'])
    })
    it('should remove beneficiary',()=>{
        const account2 = new Account(1000,'dollar')
        account2.addBeneficiary('Bob')
        account2.removeBeneficiary('Bob')
        expect(account2.returnBeneficiary()).toEqual([])
    })
})
})

describe('Bank',()=>{
    it('should return account if account exist after creating one',()=>{
        const bank = new Bank()
        bank.addAccount(account)
        expect(bank.getAccount(account)).toBe(account)
    })

    it('should return all account',()=>{
        const bank = new Bank()
        bank.addAccount(account)
        expect(bank.getAccounts()).toEqual([account])
    })

    it('should return all account after adding one and removing one',()=>{
        const bank = new Bank()
        bank.addAccount(account)
        bank.removeAccount(account)
        expect(bank.getAccounts()).toEqual([])
    })

    it('should return ammount of account after wire transfer',()=>{
        const bank = new Bank()
        const account2 = new Account(1000,'dollar')
        bank.addAccount(account)
        bank.addAccount(account2)
        bank.wireTransfer(account,account2,100)
        expect(account.amount()).toBe(900)
        expect(account2.amount()).toBe(1100)
    })
})
