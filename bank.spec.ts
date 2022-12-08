import { Account } from "./bank";
var account;


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
            expect(account.amount()).toBe(500)
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


})