const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaingate = require('mongoose-paginate-v2')

const heroSchema = new Schema({
    hero_id: Number, //hacer autoincremental
    name: String,
    eye_color: String,
    hair_color: String,
    skin_color: String,
    height: Number,
    weight: Number,
    race: String,
    publisher_id: {
        type: Number,
        ref: 'publisher'
    },
    gender_id: {
        type: Number,
        ref: 'gender'
    },
    alignment_id: {
        type: Number,
        ref: 'alignment'
    }
},
{ collection: "hero_information" }
);

heroSchema.plugin(mongoosePaingate)

const Hero = mongoose.model('hero', heroSchema);
module.exports = Hero;