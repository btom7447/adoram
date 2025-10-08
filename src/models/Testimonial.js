import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    client_name: { type: String, required: true },
    client_title: { type: String, required: true },
    testiomony: { type: String },
}, { timestamps: true });

export default mongoose.models.Testiomonial || mongoose.model("Testimonnial", TestimonialSchema);
