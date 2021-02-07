class Balance {
    #balance = 0.0;

    static transferFunds(from, to, amount) {
        if(amount > 0 &&
            from instanceof Balance &&
            to instanceof Balance) {
                const get = from.getMoney(amount);
                if(get.status == "ok") {
                    to.addMoney(amount);
                    return "Success"
                } else {
                    return get.status + " // amount tried: " + amount;
                }
        }
        return "Can't transfer";
    }

    constructor(balance = 0.0) {
        this.#balance = balance
    }

    get balance() {
        return this.#balance + "$";
    }

    addMoney(amount) {
        if(amount > 0) {
            this.#balance += amount;
        }
        return this.#balance
    }

    getMoney(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
            return {
                "status": "ok",
                "balance": this.#balance
            };
        } else {
            return {
                "status": "insufficient funds",
                "balance": this.#balance,
                "requestedAmount": amount,
                "insufficient": amount - this.#balance
            };
        }
    }
}

var myBalance = new Balance();
var yourBalance = new Balance(2231.4);

console.log(Balance.transferFunds(yourBalance,myBalance,250));
console.log();
console.log(myBalance.getMoney(100));
console.log();
console.log(Balance.transferFunds(myBalance,yourBalance,250));
console.log();
console.log(myBalance.getMoney(200));
console.log();
console.log(myBalance.balance);
console.log();
console.log(yourBalance.balance);
