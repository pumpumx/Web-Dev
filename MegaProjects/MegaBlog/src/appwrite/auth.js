import {Client , Account , ID} from "appwrite"
import config from "../config/config";

export class AuthServices {
    client = new Client()
    account;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email,name,password}){
        try {
            const userAccount = await this.account.create(ID.unique(), 
                email , password ,name)            
                if(userAccount){
                    //call another method
                    return this.login({email,password});
                }
                else{
                    return userAccount;
                }
        } catch (error) {
            throw error
        }
    }

    async login({email , password}){
        try {
            const userLogin = await this.account.createEmailPasswordSession(email , password);

        } catch (error) {
            throw error; 
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error :: getCurrentUser :: error ", error);
        }
        return null;
    }

    async logout(){
        try {
            return await account.deleteSessions();
        } catch (error) {
           console.log("APPWRITE Logout ERROR " ,error) 
        }
    }
}

const authService = new AuthServices();

export default authService



