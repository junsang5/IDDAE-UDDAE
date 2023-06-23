
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const reqId=client.id;
        const reqPassword=this.body.password;
        try{
            if(!reqId) return {success: false, msg: "please enter id",};
            if(!reqPassword) return {success: false, msg: "please enter password",};
            const user = await UserStorage.getUserInfo(reqId);
            if(user)
            {
                if(user.password===reqPassword)
                    return {success: true, msg: "login success",};
                return {success: false, msg: "wrong password",};
            }
            return { success: false, msg: "id does not exist",};
        } catch(err) {
            return { success: false, err };
        }
    }

    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.saveUser(client);
        return response;
        } catch(err) {
            return { success: false, msg: "id already exist", };
        }
    }
}
module.exports = User;