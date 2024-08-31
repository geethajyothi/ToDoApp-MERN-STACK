const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.status(200).send(toDo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving To-Do items.");
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const newToDo = await ToDoModel.create({ text });
        console.log("Added successfully:", newToDo);
        res.status(201).send(newToDo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving To-Do item.");
    }
};

module.exports.updateToDo = async (req, res) => {
    try {
        const { _id, text } = req.body;
        await ToDoModel.findByIdAndUpdate(_id, { text });
        res.status(200).send("Updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating To-Do item.");
    }
};

module.exports.deleteToDo = async (req, res) => {
    try {
        const { _id } = req.body;
        await ToDoModel.findByIdAndDelete(_id);
        res.status(200).send("Deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting To-Do item.");
    }
};
