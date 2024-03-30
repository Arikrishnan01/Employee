import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true,
    },
    empName: {
        type: String,
        required: true,
    },
    empSelary: {
        type: String,
        required: true,
    },
    empRole:{
        type: String,
        required: true,
    },
});

export default mongoose.model("emp", empSchema);