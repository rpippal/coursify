import mongoose from "mongoose";

const whatYouLearnSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const checkpointSchema = new mongoose.Schema({
  label: String,
});

const courseSchema = new mongoose.Schema(
  {
    // Basic course info
    title: {
      type: String,
      required: true,
    },

    subtitle: String,

    description: String,

    // Educator info
    educatorName: {
      type: String,
      required: true,
    },

    educatorEmail: {
      type: String,
      required: true,
    },

    role: String,

    image: String,

    // Course content
    whatYouLearn: [whatYouLearnSchema],

    checkpoints: [checkpointSchema],

    // Course meta
    price: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Course ||
  mongoose.model("Course", courseSchema);
