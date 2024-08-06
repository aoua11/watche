const { model } = require('mongoose');

module.exports = model('watche',
    {
        brand: String,
        model: String,
        price: Number,
        specifications: {
            case_material: String,
            movement: String,
            water_resistance: String
        },
        image: String,
    }
)