import mongoose from "mongoose";

const liveTestSchema = new mongoose.Schema(
  {
    examType: {
      type: String,
      required: true, // Mandatory field
      trim: true, // Removes extra spaces
    },
    examTitle: {
      type: String,
      required: true,
      trim: true,
    },
    liveStatus: {
      type: String,
      default: null, // Optional field
      trim: true,
    },
    details: {
      type: [String], // Array of strings to hold exam details
      required: true,
      validate: [arrayLimit, "{PATH} exceeds the limit of 4"], // Validate array length
    },
    syllabusLink: {
      type: String,
      required: true,
      trim: true,
    },
    buttonLabel: {
      type: String,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

// Custom validator for `details` length
function arrayLimit(val) {
  return val.length <= 4;
}

// Create and export the model
const LiveTest = mongoose.model("LiveTest", liveTestSchema);

export default LiveTest;
