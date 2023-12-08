const router = require('express').Router()
const { getAllAttributes, createAttribute, getAttributeById, updateAttribute, deleteAttribute } = require('../../controllers/attribute-controller')

// Set up GET all and POST at /api/attributes
router
    .route('/')
    .get(getAllAttributes)
    .post(createAttribute)


// Set up GET one, PUT, and DELETE at /api/attributes/:id
router
    .route('/:id')
    .get(getAttributeById)
    .put(updateAttribute)
    .delete(deleteAttribute);



module.exports = router