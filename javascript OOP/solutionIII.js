function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function() {
        this.score++;
    },
    login: function() {
        console.log('logged in')
    }
}

const user1 = userCreator('Will', 3);
const user2 = userCreator('Eva', 5);

user1.increment();
user2.login();

console.log(user1);
console.log(user2);