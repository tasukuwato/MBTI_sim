const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({

    //プレイヤー名
    name: {
        type: String,
        required: true
    },

    //役職名
    role: {
        type: String,
        required: true,
        default: 'Villager'
    },

    //陣営
    faction: {
        type: String,
        required: true,
        default: 'Villager Faction'
    },

    //生存状況
    isAlive: {
        type: Boolean,
        required: true,
        default: true
    },

    //投票
    votes: {
        type: Number,
        required: true,
        default: 1
    }

});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
