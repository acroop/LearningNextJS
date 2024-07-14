import mongoose, { Schema, Document } from "mongoose";


export interface Message extends Document{
    content: string,
    createdAt: Date
}

const messageSchema: Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now

    }
})

export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode : string,
    verifyCodeExpiry : Date,
    isVerified : boolean
    isAcceptingMessage : boolean,
    messages : Message[]
}

const userSchema: Schema<User> = new Schema({

    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "Please provide valid email address"]
    },
    verifyCode: {
        type: String,
        required: [true, "Verification code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: false
    },
    messages: [messageSchema]
})

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)

export default userModel