// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },        // optional for auth
  role: { type: String, default: "student" },
  purchasedCourses: [
    ObjectId("courseId1"),
    ObjectId("courseId2")
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
