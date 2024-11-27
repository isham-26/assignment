
import mongoose from "mongoose";

const progressCardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Make this field mandatory
      trim: true, // Removes extra spaces from input
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    progress: {
      type: Number,
      required: true,
      min: 0, // Ensure progress is not below 0
      max: 100, // Ensure progress is not above 100
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const Progress = mongoose.model("Progress", progressCardSchema);

export default Progress;
