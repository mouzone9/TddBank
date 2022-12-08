import {Account} from "./bank";

var account = new Account(100);

describe('Account',()=>{

    describe('getBalance',  ()=>{
        it('Return balance account',()=>{
            expect(account.balance()).toBe(100)
        })
    })

    describe('addMoney',  ()=>{
        it('Should return account balance after test',()=>{
            expect(account.addMoney(10)).toBe(110)
        })
    })

    describe('getMoney',  ()=>{
        it('should return true',()=>{
            expect(account.getMoney(5)).toBe(105)
        })
    })


})