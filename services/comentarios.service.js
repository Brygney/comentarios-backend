const crypto = require('crypto');
const boom = require('@hapi/boom');
const { models }= require('./../libs/sequelize');

class comentariosService{

    constructor(){

     }

    async  create(data){
    const nuevocomentario = {
        id: crypto.randomUUID(),
        ...data
      };
      const salida = await models.Comentario.create(nuevocomentario);
      return salida;
    }

    async find(){
      const salida = await models.Comentario.findAll();
      return salida;
   }

   async findOne(id){
    const comentario = await models.Comentario.findByPk(id);
    if (!comentario){
       throw boom.notFound('Comentario no encontrado');
     }
     return comentario;
  }

  //   const comentario = this.comentarios.find((comentario) => {
  //     return comentario.id === id;
  //   });
  //   if (!comentario){
  //     throw boom.notFound('Comentario no encontrado');
  //   }
  //   return comentario;
  // }

  async  update(id, changes){
    const comentario = await this.findOne(id);
    const salida = await comentario.update(changes);
    return salida;
  }
  //   const index = this.comentarios.findIndex(comentario =>{
  //       return comentario.id === id;
  //     });
  //     if (index === -1){
  //       throw boom.notFound('Comentario no encontrado');
  //     }
  //     const comentario = this.comentarios[index];
  //     this.comentarios[index] = {
  //       ...comentario,
  //       ...changes
  //     };
  //     return this.comentarios[index];
  //  }


   async  delete(id){
    const comentario = await this.findOne(id);
    await comentario.destroy();
    return { id };
    // const index = this.comentarios.findIndex(comentario =>{
    //     return comentario.id === id;
    //   });
    //   if (index === -1){
    //     throw boom.notFound('Comentario no encontrado');
    //   }
    //   this.comentarios.splice(index,1);
    //   return { id };
   }
  }

  module.exports= comentariosService;
