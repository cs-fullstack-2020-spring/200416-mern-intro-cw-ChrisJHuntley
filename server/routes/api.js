let express = require('express');
let router = express.Router();
router.use(express.json());
let CharacterCollection = require('../models/CharacterSchema')
router.get('/', (req, res) => {
    // res.send('all students')
    CharacterCollection.find({},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
        // res.send('all')
    })

})
router.post('/', (req, res) => {
    // res.send('post method worked')
    CharacterCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);
    });
    // res.send('ADD')
})
module.exports = router;