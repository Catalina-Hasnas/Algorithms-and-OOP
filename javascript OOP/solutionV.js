class UserCreator {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
    increment() { this.score++ };
    login() { console.log(`${this.name} logged in`) }
}

const user1 = new UserCreator('Will', 3);
const user2 = new UserCreator('Eva', 5);

user1.increment();
user2.login();

console.log(user1);
console.log(user2);