class Account {
    balance:number;
    
    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
    }

    deposit(depositAmt:number) {
        this.balance += depositAmt;
    }

    withdraw(withdrawAmt:number) {
        this.balance -= withdrawAmt;
    }

    checkBalance() {
        console.log(this.balance);
    }
}