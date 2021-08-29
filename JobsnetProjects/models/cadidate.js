const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome:  { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true},
    data: {type: String, unique: false, required: true},
    Est_Civil:{type: String, unique:false, required: true},
    sexo: { type: String, unique:false, required: true},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, Unique: false, required: true},
    estado: { type: String, Uniquie: false, required: true},
    email: { type: String, unique: true, required: true},
    endereco: {type: String, unirque: false, required: true},
    celular:{ type: String, unique:false, required: true },
    Tel1: {type: String, unique:false, required: true},
    cep: { type: String, unique: false, required: true}
}, {
    timestamps: true
});
module.exports = mongoose.model('Candidate', CandidateSchema);