const crypto = require('crypto');

class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.friendsList = [];
        this.isAdmin = false;
    }

    hashPassword(pw) { 
        this.password = crypto?. // crypt dot what
        return this.password;
    }

}

module.exports = User;