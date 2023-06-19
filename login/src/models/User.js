
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const reqId=client.id;
        const reqPassword=this.body.password;
        const { id, password } = await UserStorage.getUserInfo(reqId);
        if(!id) return {success: false, msg: "id does not exist",};
        else if(password===reqPassword)
            return {success: true, msg: "login success",};
        else return {success: false, msg: "wrong password",};

    }
    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.saveUser(client);
        return response;
        } catch(err) {
            console.error(err);
        }
        return { success: false, msg: "id already exist", };
    }
}
module.exports = User;