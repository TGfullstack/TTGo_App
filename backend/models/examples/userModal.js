const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 30},
    email: { type: String, required: true, unique: true, minLength: 3, maxLength: 30},
    password: {type: String, required: true},
    image: { type: String},
    provider: { type: String, enum: ['credentials', 'github', 'google', 'apple'], default: 'credentials'}
  }, 
  {
    timestamps: true
  }
);

export default mongoose.model('User', UserSchema);