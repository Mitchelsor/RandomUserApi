const { Schema, model } = require('mongoose');

const ListaSchema = Schema({
   nickname: {
      type: String,
   },
   favoritos:{
       type: Array
   }
 
})

ListaSchema.method('toJSON', function(){
   const {__v,_id,...object} = this.toObject();
   object.uid = _id;
   return object;

})


module.exports = model( 'Favoritos', ListaSchema );  