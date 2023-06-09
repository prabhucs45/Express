const express= require('express')

const router = express.Router();

const Users = require('../models/users')

// router.get('/', (req, res) => {
//     console.log('Get Request');
//     res.send('Get Request')
// })

/**
 * Get Method
 */
router.get('/', async(req, res) => {
    try{
       const users = await Users.find();
       res.json(users);
    }catch(err){
        res.send('Error' + err)
    }
});

/**
 * Get By Id
 */
router.get('/:id', async(req, res) => {
    try{
       const users = await Users.findById(req.params.id);
       res.json(users);
    }catch(err){
        res.send('Error' + err)
    }
});

/**
 * Update by Id
 */
router.patch('/:id', async(req, res) => {
    try{
       const users = await Users.findById(req.params.id);
       users.sub = req.body.sub;
       const u1 = await users.save();
       res.json(u1);
    }catch(err){
        res.send('Error' + err)
    }
});


/**
 * Inserting a new record
 */
router.post('/', async(req, res) => {
    const user = new Users({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const user1 = user.save();
        res.json(user1);
    }catch(err){

    }
});

/**
 * Delete by Id
 */
router.delete('/:id', async(req, res) => {
    try{
       const users = await Users.findOneAndRemove({_id: req.params.id});
       res.send('Record Deleted');
    }catch(err){
        res.send('Error' + err)
    }
});


module.exports = router