const { Quest } = require('../models/Quest')

const questController = {
    // Get all quests
    getAllQuests(req, res){
        Quest.find({})
            .then(dbQuestData => res.json(dbQuestData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // Get one quest by id
    getQuestById({ params }, res) {
        Quest.findOne({ _id: params.id })
            .then(dbQuestData => {
                if(!dbQuestData) {
                    res.status(404).json({ message: "No Quest found with this id!" })
                    return
                }
                res.json(dbQuestData)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // Create a quest
    createQuest({ body }, res){
        Quest.create(body)
            .then(dbQuestData => res.json(dbQuestData))
            .catch(err => res.status(400).json(err))
    },

    // Update quest by id
    updateQuest({ params, body }, res) {
        Quest.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbQuestData => {
                if(!dbQuestData) {
                    res.status(404).json({ message: "No Quest found with this id!"})
                    return
                }
                res.json(dbQuestData)
            })
            .catch(err => res.status(400).json(err))
    },

    // Delete quest
    deleteQuest({ params }, res) {
        Quest.findOneAndDelete({ _id: params.id })
            .then(dbQuestData => {
                if(!dbQuestData) {
                    res.status(404).json({ message: "No Quest found with this id!"})
                    return
                }
                res.json(dbQuestData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = questController