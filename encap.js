class User {
    static #totalOnline = 0;
    static #usersArray = [];
    static formatTotal() {
        return this.#totalOnline + " users currently online";
    }
    static formatTotalUsers() {
        var usersArray = this.#usersArray;
        console.log(usersArray);
        var str = "";
        for (var i = 0; i<usersArray.length; i++) {
            str += usersArray[i] + 'is online'
        }
        return str;
    }

    #userName = ""
    #email = ""

    #loggedIn = false

    constructor(userName, email) {
        this.#userName = userName;
        this.#email = email;
    }

    logIn() {
        if(!this.#loggedIn) {
            User.#totalOnline++;
            this.#loggedIn = true;
            User.#usersArray.push(this.#userName);
        }
    }

    logOut() {
        if(this.#loggedIn) {
            User.#totalOnline--;
            this.#loggedIn = false;
            var usersArray = User.#usersArray;
            var index = usersArray.findIndex( (el) => el===this.#userName );
            User.#usersArray.splice(index, 1);
        }

    }

    getUserInfo() {
        return "Username: " + this.#userName +
                "Email:" + this.#email;
    }
}

console.log(User.formatTotal());

var Catalina = new User("Catalina", "catalina@gmail.com");
Catalina.logIn();
Catalina.logIn();

var Petru = new User("Petru", "petru@gmail.com");
Petru.logIn();

console.log(User.formatTotal());
console.log(User.formatTotalUsers());

Catalina.logOut();

console.log(User.formatTotal());
console.log(User.formatTotalUsers());



// console.log(Catalina.#email);