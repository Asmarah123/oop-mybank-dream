#! /usr/bin/env node
//class
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    //publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("credit successfully get into new account and your balance is:" + this.accountbalance);
        }
        else {
            console.log("credit unsuccessful");
        }
    }
    //publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit successfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit unsuccessfully");
        }
    }
}
//customer detail
class Customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //publically user access
    display() {
        console.log("Name:" + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount In Bank:" + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(800);
const c1 = new Customer({ firstname: "Zubair", lastname: "Ali" }, 32, "male", 378945, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(500);
const c2 = new Customer({ firstname: "Haseeb", lastname: "Ali" }, 30, "male", 378945, a1);
c2.display();
c2.bankaccount.debit(200);
console.log();
export {};
