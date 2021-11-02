function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++
    };
    return newUser;
};

const user1 = userCreator('Will', 3);
const user2 = userCreator('Eva', 5);

user1.increment();

console.log(user1);