const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

            const { nome, cargo, Est_Civil, sexo, bairro, cidade, estado,
            email, endereco, celular, Tel1, cep} = req.body;

            const newCadidate = new Candidate();

            newCadidate.nome = nome;
            newCadidate.cargo = cargo;
            newCadidate.Est_Civil = Est_Civil;
            newCadidate.sexo = sexo;
            newCadidate.bairro = bairro;
            newCadidate.cidade = cidade;
            newCadidate.estado = estado;
            newCadidate.email = email;
            newCadidate.endereco = endereco ;
            newCadidate.celular = celular;
            newCadidate.Tel1 = Tel1;
            newCadidate.cep = cep;

            newCadidate.save((err, savedCandidate) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('FALHA');
                }

                return res.status(200).send(savedCandidate); 
            });
         },


};