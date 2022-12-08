import {Account} from "./bank";
var account;

beforeEach(()=>{
    account = new Account(1000);
})

describe('Account',()=>{
    describe('getBalance',  ()=>{
        it('Return balance account',()=>{
            expect(account.amount()).toBe(1000)
        })
    })
    describe('addMoney',  ()=>{
        it('Should return account balance after adding money',()=>{
            account.addMoney(10)
            expect(account.amount()).toBe(1010)
        })
    })
    describe('getMoney',  ()=>{
        it('should return not enough money',()=>{
            expect(() => account.getMoney(5000)).toThrow('You don\'t have enough money, get a job')
        })
        it('Should return account balance after getting money',()=>{
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
})
