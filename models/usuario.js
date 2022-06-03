const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
   nickname: {
      type: String,
   },
   favoritos:{
       type: Array
   }
 
})

UsuarioSchema.method('toJSON', function(){
   const {__v,_id,...object} = this.toObject();
   object.uid = _id;
   return object;

})


module.exports = model( 'Usuarios', UsuarioSchema );  