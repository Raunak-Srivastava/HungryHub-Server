import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    photo: String,
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        Enumerator: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export const User = mongoose.model("User", schema);