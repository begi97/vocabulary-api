import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: true,
        enum: ['English', 'German', 'Turkish'], // 🔒 Only allow these values
    }
}, {
    timestamps: true //createdAt, updateat
});

const VocabularySchema = mongoose.model("Word", vocabularySchema);

export default VocabularySchema;