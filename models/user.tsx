import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: String,
  closes: Number
})

export default mongoose.models.User || mongoose.model('User', UserSchema)