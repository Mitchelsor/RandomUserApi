
const Lista = require('../models/lista')


const getListas =  async(req, res) => {

    const Listas = await Lista.find({}, );

    res.json({
        ok: true,
        Listas
    })
}


const postListas = async (req, res) => {

    console.log(req)

    const { nickname, favoritos } = req.body;
    
    const lista = new Lista(req.body)

    await lista.save();

    res.json({
        ok: true,
        msg: 'todobello',
        lista
    })
}

module.exports = {
    getListas,
    postListas
}

