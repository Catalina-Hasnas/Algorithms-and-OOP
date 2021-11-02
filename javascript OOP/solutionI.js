const user1 = {
    name: 'Will',
    score: 3,
    increment: function() { user1.score++ }
};

user1.increment();
console.log(user1);

const user2 = Object.create(null);
user2.name = 'Eva';
user2.score = 5;
user2.increment = function() {
    user3.score++;
}