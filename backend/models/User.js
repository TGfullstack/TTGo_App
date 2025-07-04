const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // bcryptjs is more commonly used with Mongoose
const { Schema, model, models } = mongoose;

// Define the schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    lowercase: true,
    minlength: 8,
    maxlength: 20,
  },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true }, // ✅ hash this
  image: { type: String },
  date_of_birth: { type: Date },
  primary_email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  secondary_email: { type: String, unique: true, sparse: true },
  phone_number: { type: String, unique: true, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true });

// ✅ Pre-save hook to hash password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Method to compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Export model
const User = models.User || model('User', UserSchema);
module.exports = User;
