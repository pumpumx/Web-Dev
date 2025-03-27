import mongoose from mongoose

const hospitalSchema = new mongoose.Schema(
    {
            hospitalName: {
                type: String,
                required: true,
            },
            addressLine1: {
                type: String,
                required: true,
            },
            addressLine2: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: true,
            },
            pinCode: {
                type: String,
                required: true,
            },
            specialisation: [
                {
                    type: String,
                    required: true,
                }
            ]

    },{Timestamps:true})

export const Hospital = mongoose.model('Hospital',hospitalSchema)