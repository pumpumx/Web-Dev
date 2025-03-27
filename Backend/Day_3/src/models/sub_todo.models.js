import mongoose , { Mongoose } from 'mongoose'

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        
    },{Timestamps:true}
)

export const subTodo = mongoose.Model('subTodo' , subTodoSchema)