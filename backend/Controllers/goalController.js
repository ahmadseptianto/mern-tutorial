if(!req.body.text){
    res.status(400).json({message :'Please add a text field'})
    }
