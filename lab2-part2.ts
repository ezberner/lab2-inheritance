class SavingsAccount {
    private savingsBalance:number;
    private withdrawCount:number;

    constructor(private initialBalance:number, private ownerName:string) {
        this.savingsBalance = initialBalance;
        this.withdrawCount = 0;
    }

    deposit(depositAmt:number) {
        this.savingsBalance += depositAmt;
    }

    withdraw(withdrawAmt:number) {
        if (this.withdrawCount == 3) {
            console.log("You have reached the widtrawl limit for your savings account!")
        } else {
            this.withdrawCount += 1;
            this.savingsBalance -= withdrawAmt;
        } 
    }

    checkBalance() {
        console.log(this.savingsBalance);
    }
}


let SavingsA:SavingsAccount = new SavingsAccount(4000, "Eric");

SavingsA.checkBalance();
SavingsA.withdraw(2);
SavingsA.checkBalance();
SavingsA.deposit(55);
SavingsA.checkBalance();

SavingsA.withdraw(2);
SavingsA.checkBalance();
SavingsA.withdraw(2);
SavingsA.checkBalance();
SavingsA.withdraw(2);
SavingsA.checkBalance();