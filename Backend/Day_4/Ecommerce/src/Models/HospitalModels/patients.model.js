import mongoose from mongoose

const patientSchema = new mongoose.Schema(
    {     name:{
        type: String,
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,

    },
    address:{
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    },
    bloodGroup:{
        type: String,
        enum: ["" , "","","",""]
    },
    gender:{
        type:String,
        enum: ["M" , "F" , "O"],
        required: true,
    },
    admittedIn: {
        type: model.Schema.Types.ObjectID,
        ref:"hospital"
    }
    
},{Timestamps:true})

export const patient = mongoose.model('patient',patientSchema)