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
            expect(account.amount()).toBe(500)
        })
    })




    // describe('multipleOperation',  ()=>{
    //     it('Return balance account',()=>{
    //         const account2 = new Account(1000)
    //         account2.addMoney(200)
    //         account2.getMoney(100)
    //         expect(account2.amount()).toBe(1100)
    //     })
    // })


})