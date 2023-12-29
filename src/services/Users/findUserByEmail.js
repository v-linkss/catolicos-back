const User = require('../../models/users')

async function  findUser(email){
    try{
        const user = await User.findOne({
            where:{
                username:email
            },
            attributes: [
                'id',
                'username',
                'password',
                'nome',
                'group_id',
                'role',
                'created',
                'excluido',
                'master',
                'token',
                'url_foto',
                'celular',
                'tabvalores_perfil_id',
                'fone'
              ]
        })
        return user
    } catch (error) {
        // Trate o erro aqui
        console.error('Erro ao buscar usuário por email:', error);
        throw new Error('Erro ao buscar usuário por email:', error);
      }
};

module.exports = { User, findUser };