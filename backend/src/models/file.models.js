import mongoose from 'mongoose';
let ObjectId = mongoose.Schema.Types.ObjectId;

const uploadedFileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    originalName: {
      type: String,
    },
    fileExtension: {
      type: String,
    },
    fileSize: {
      type: Number,
    },
    user: {
      type: ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

uploadedFileSchema.methods.toJSON = function () {
  let obj = this.toObject();
  return obj;
};

const File = mongoose.model("File", uploadedFileSchema);
export default File;
