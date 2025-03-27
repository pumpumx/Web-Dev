import mongoose, { Mongoose } from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: Boolean,
            unique: Boolean
        },
        email: {
            type: String,
            required: Boolean,
            unique: Boolean
        },
        password: {
            type: String,
            required: Boolean
        }
    }, {Timestamps: true}
)

export const User = Mongoose.model("User",userSchema)