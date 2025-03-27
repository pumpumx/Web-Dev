import mongoose from mongoose

const medicalRecordSchema = new mongoose.Schema(
    {
            name: {
                type: String,
            }
    },{Timestamps:true})

export const medicalRecord = mongoose.model('medicalRecord',medicalRecordSchema)