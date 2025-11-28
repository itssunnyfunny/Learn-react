import config from "../config/config";

import {Client, Account, ID} from "appwrite"
 
export class AuthService {
    client = new Client()
    account;
    
    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async creatAccount({email, passward, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),
            email, passward, name);
            if (userAccount) {
                //call another method
                return this.login({email, passward});

            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, passward}){
        try {
         return await this.account.createEmailSession(email, passward);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
           return await this.account.get() 
           // direct return becouse it can be handle in frontend part
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null; // if there is no user 
    }
    
    async logout () {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }


}

const authService = new AuthService();

export default authService;