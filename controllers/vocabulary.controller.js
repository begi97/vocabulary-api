import mongoose from "mongoose";
import VocabularySchema from "../moduls/vocabularySchema.model.js";

export const getAllWords = async (req, res) => {
   const word = await VocabularySchema.find({});
   try {
    res.status(200).json({data: word, success: true});
   } catch (error) {
    console.error("Error in Getting All Words:", error.message);
    res.status(500).json({success: false, message: "Server Error"})
   }
}

export const saveWordController = async (req, res) => {

   const {word, meaning} = req.body;

   if(!word || !meaning) return res.status(400).json({ success: false, message: 'Please provide all necessary fields' });

   const newWord = new VocabularySchema(req.body);

   try {

    await newWord.save();
    res.status(201).json({success: true, message: "The word has been added successfully"});
      
   } catch (error) {
    console.error("Error in Save Word:", error.message);
    res.status(500).json({success: false, message: "Server Error"})
   }
}

export const deleteWordController = async (req, res) => {

   const {id} = req.params;

   try {
    // delete
    await VocabularySchema.findByIdAndDelete(id);
    // get the updated list
    const updatedList = await VocabularySchema.find({});

    res.status(200).json({success: true, message: "The word has been deleted successfully.", data: updatedList})
      
   } catch (error) {
    console.error("Error in Delete Word:", error.message);
    res.status(500).json({success: false, message: "Server Error"})
   }

}

export const editWordController = async (req, res) => {

    const {id} = req.params;

    const word = req.body;

   if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid id"})
    }

   try {

    const updatedWord =  await VocabularySchema.findByIdAndUpdate(id, word, {new: true});
    res.status(200).json({success:true, data: updatedWord});
      
   } catch (error) {
    console.error("Error in Update Word:", error.message);
    res.status(500).json({success: false, message: "Server Error"})
   }
}