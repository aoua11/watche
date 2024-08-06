const Watche = require('../models/Watche');
const Joi = require('joi');

exports.index = async(req,res) =>{
const watches = await Watche.find();
res.json(watches);
}


exports.show = async (req,res)=>{
    const watches  = await Watche.findById(req.params.id);
    return watches ? res.json(watches) :res.status(404).json({message : "not found"});
}




exports.store = async (req , res)=>{
    const watches = await Watche.create({
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        specifications: {
            case_material: req.body.case_material,
            movement: req.body.movement,
            water_resistance: req.body.water_resistance
        },
        image: req.file.path,
    });
    return watches ? res.json(watches) :res.status(404).json({message : "not found"});
}


exports.update = async (req , res)=>{
    const watches = await Watche.findByIdAndUpdate(req.params.id ,req.bod , {new: true});
    return watches ? res.json(watches) :res.status(404).json({message : "not found"}); 
}

exports.delete = async (req ,res)=>{
    await Watche.findByIdAndDelete(req.params.id);
    return watches ? res.send('Delete succesfully') :res.status(404).json({message : "not found"});;
}