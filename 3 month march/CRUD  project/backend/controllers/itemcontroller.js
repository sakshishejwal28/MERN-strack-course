 
const Items = require("./../models/itemmodels")

const addItem = async (req, res) => {

    try {
        const { name, decription, sellingPrice, PurchasePrice, quantity, unit } = req.body

        const saveItem = new Items(
            {
                name,
                decription,
                sellingPrice,
                PurchasePrice,
                quantity,
                unit
            }
        )

        await saveItem.save()
        res.status(201).json({ message: "Item created", data: saveItem });

    } catch (error) {
        console.log(error)
    }
}

const getAllItems = async (req, res) => {

    try {
        const items = await Items.find()
        res.status(200).json({ message: "get all item", data: items });
    } catch (error) {
        console.log(error)
    }
}

const deleteItem = async (req, res) => {

    try {
        const { id, } = req.params
        const deleteItem = await Items.findByIdAndDelete(id)
        res.status(200).json({ message: " item deleted", deleteItem: deleteItem });
    } catch (error) {
        console.log(error)
    }
}

const editItem = async (req, res) => {

    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = { addItem, getAllItems, deleteItem, editItem }