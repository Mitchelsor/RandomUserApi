
const Lista = require('../models/lista')


const getListas =  async(req, res) => {

    try {
        const listas = await Lista.find({}, );

        res.json({
            listas
        })
        
    } catch (error) {
        res.status(500).json({
            error: 'Error al cargar las listas'
        })
    }

  
}


const postListas = async (req, res) => {

    const { nickname, favoritos } = req.body;
    
    const lista = new Lista(req.body)

    try {
        await lista.save();

            res.json({
                msg: 'Guardado correctamente',
                lista
            })
        
    } catch (error) {
        res.status(500).json({
            error: 'Error al guardar la lista'
        })
    }

    
}



module.exports = {
    getListas,
    postListas,
   
}

