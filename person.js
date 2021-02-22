class IContact {
    name = "";
    get email() { return "" };
    set email(email = "") { };
    getAdditionalInformation(){
        console.error("Interface not implemented");
    }
}

class Email {
    #confirmed = false;
    #valid = false
    #email = "";

    constructor(email = "") {
        this.email = email;
    }

    confirmEmail(code) {
        if(code = "1234") {
            this.#confirmed = true;
        }
    }

    get email() {
        if(this.#valid && this.#confirmed) {
            return this.#email
        } else {
            return "email " +
                (this.#valid ? "" : "- not valid //") + 
                (this.#confirmed ? "" : "- not confirmed //");
        }
    }

    set email(newEmail) {
        if(newEmail.includes("@")) {
            this.#email = newEmail;
            this.#valid = true;
            this.#confirmed = false;
        }
    }
}

class Person extends IContact {
    name = "";
    emailObj = null;
    address = "";

    constructor(name, email, address = "") {
        super();
        this.name = name;
        this.emailObj = new Email(email); 
        this.address = address;
    }

    get email() {
        return this.emailObj.email;
    }

    set email(newEmail) {
        this.emailObj.email = newEmail;
    }

    getAdditionalInformation() {
        if(this.address !== "") {
            return "My address: " + this.address;
        } else {
            return "No additional information";
        }
    }
}

const Catalina = new Person("Catalina", "catalinahasnas1996@gmail.com", "Bul. Iul. Man. 65");
const Petru = new Person("Petru", "deapulaemail.com", "");

console.log(Catalina.email);
Catalina.emailObj.confirmEmail("1234");
console.log(Catalina.email);
console.log(Petru.email);

Catalina.email = "catalinahasnas@yahoo.com";

Catalina.emailObj.confirmEmail("1234");

console.log(Catalina.email);


const contactInfo = [Catalina, Petru, new IContact];
contactInfo.forEach(contact => {
    if(contact instanceof IContact){
        console.log();
        console.log(contact.email);
        console.log(contact.name);
        console.log(contact.getAdditionalInformation());
    }
});