const { User } = require('../models/User')
const app = require ('../server')


const userController = {

    register(req, res){
     
        console.log(req.sessionID)

        User.create(req.body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))

        
    },

    login(req, res){
     
        console.log(req.session)

        User.findOne({ username: req.body.username, password: req.body.password })
            .then(dbUserData => {
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))

        
    },
    
}

module.exports = userController