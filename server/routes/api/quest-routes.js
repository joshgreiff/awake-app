const router = require('express').Router()
const { getAllQuests, createQuest, getQuestById, updateQuest, deleteQuest } = require('../../controllers/quest-controller')

// Set up GET all and POST at /api/quests
router
    .route('/')
    .get(getAllQuests)
    .post(createQuest)


// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getQuestById)
    .put(updateQuest)
    .delete(deleteQuest);



module.exports = router