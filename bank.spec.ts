import {Account} from "./bank";

var account = new Account();

describe('Account',()=>{

    describe('getBalance',  ()=>{
        it('should return true',()=>{
            expect(account.balance()).toBe(0)
        })
    })

    describe('addMoney',  ()=>{
        it('should return true',()=>{
            expect(account.addMoney(n)).toBe(0)
        })
    })

    describe('getMoney',  ()=>{
        it('should return true',()=>{
            expect(account.getMoney(n)).toBe(0)
        })
    })


})