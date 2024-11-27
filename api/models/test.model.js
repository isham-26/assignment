import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    examType: {
      type: String,
      required: true, 
      trim: true, 
    },
    examTitle: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: [String], 
      required: true,
      validate: [arrayLimit, "{PATH} exceeds the limit of 4"], 
    },
    syllabusLink: {
      type: String,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true, 
  }
);


function arrayLimit(val) {
  return val.length <= 4;
}


const Test = mongoose.model("Test", TestSchema);

export default Test;
