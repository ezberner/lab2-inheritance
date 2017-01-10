class CheckingAccount {
    private checkingBalance:number;

    constructor(private initialBalance:number, private ownerName:string) {
        this.checkingBalance = initialBalance;
    }

    deposit(depositAmt:number) {
        this.checkingBalance += depositAmt;
    }

    withdraw(withdrawAmt:number) {
        this.checkingBalance -= withdrawAmt;
    }

    checkBalance() {
        console.log(this.checkingBalance);
    }
}

let CheckingA:CheckingAccount = new CheckingAccount(400, "Eric");

CheckingA.checkBalance();
CheckingA.withdraw(2);
CheckingA.checkBalance();
CheckingA.deposit(55);
CheckingA.checkBalance();

CheckingA.withdraw(2);
CheckingA.checkBalance();
CheckingA.withdraw(2);
CheckingA.checkBalance();
CheckingA.withdraw(2);
CheckingA.checkBalance();
