import mongoose from mongoose


const hospitalHours = new mongoose.Schema(
    {
        hospitalHours: {
            type: Number,
            required: true,
        }
    })

const doctorSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        salary:{
            type: String,
            required: true,
        },
        qualification:{
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        workInHospital:[
                {
                    type: mongoose.Schema.Types.ObjectID,
                    ref:"Hospital",
                }
            ],
        
        },{Timestamps:true})

export const doctor = mongoose.model('doctor',doctorSchema)