class Account {
    private balance:number;
    
    constructor(private theInitialBalance:number, private theOwnerName:string) {
        this.balance = theInitialBalance;
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

class Checking extends Account {
    
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
    }
}

class Savings extends Account {

    
}



let test1:Checking = new Checking(5000, "Bob");

test1.checkBalance();