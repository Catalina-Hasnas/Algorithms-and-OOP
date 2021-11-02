function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function() { this.score++ };
userCreator.prototype.login = function() { console.log(`${this.name} logged in!`) };

const user1 = new userCreator('Will', 3);
const user2 = new userCreator('Eva', 5);

user1.increment();
user2.login();

console.log(user1);
console.log(user2);
