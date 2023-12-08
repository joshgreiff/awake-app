const { Attribute } = require('../models/Attribute')

const attributeController = {
    // Get all attributes
    getAllAttributes(req, res){
        Attribute.find({})
            .then(dbAttributeData => res.json(dbAttributeData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // Get one attribute by id
    getAttributeById({ params }, res) {
        Attribute.findOne({ _id: params.id })
            .then(dbAttributeData => {
                if(!dbAttributeData) {
                    res.status(404).json({ message: "No Attribute found with this id!" })
                    return
                }
                res.json(dbAttributeData)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // Create an attribute
    createAttribute({ body }, res){
        Attribute.create(body)
            .then(dbAttributeData => res.json(dbAttributeData))
            .catch(err => res.status(400).json(err))
    },

    // Update attribute by id
    updateAttribute({ params, body }, res) {
        Attribute.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbAttributeData => {
                if(!dbAttributeData) {
                    res.status(404).json({ message: "No Attribute found with this id!"})
                    return
                }
                res.json(dbAttributeData)
            })
            .catch(err => res.status(400).json(err))
    },

    // Delete attribute
    deleteAttribute({ params }, res) {
        Attribute.findOneAndDelete({ _id: params.id })
            .then(dbAttributeData => {
                if(!dbAttributeData) {
                    res.status(404).json({ message: "No Attribute found with this id!"})
                    return
                }
                res.json(dbAttributeData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = attributeController