import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        default: [],
    },
});

const User = models?.User || model("User", UserSchema);

export default User;
// export const User = models?.User || model("User", UserSchema);
