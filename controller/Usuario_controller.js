const User = require('../models/Usuario');

module.exports ={

    async Store(req,res){
         return res.send("funciona...");
     },

     async create(req,res){
     const usuarioExiste = await User.findOne({ where: { email: req.body.email }})
        if(usuarioExiste){  
        return res.json({
              message:"usuario ja existe!"
          })  
        }
       const usuario = await User.create(req.body);
              if(usuario){
                return res.json({
                    error:false,
                    message:"Usuario cadastrado com Sucesso"
                }) 
             }else{
                 return res.json({
                     error:true,
                     message:"Erro: Usuario não cadastrado com Sucesso"
                 }) 
             }
        

    


     }

}