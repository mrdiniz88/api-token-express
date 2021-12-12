const mongoose = require("../../database");
const bcrypt = require('bcryptjs');


// Creating models for user
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Encrypting the user's password
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;