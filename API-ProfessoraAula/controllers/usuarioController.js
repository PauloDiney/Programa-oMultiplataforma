const usuarioService = require('../services/usuarioServices');

async function criarUsuario(req, res) {
   try {
        const {nome, email, senha} = req.body;
        const resultado = await usuarioService.criarUsuario(nome, email, senha);
        if (resultado) {
            return res.status(201).json({mensagem: "Usuário criado com sucesso"});
        } else {
            return res.status(500).json({erro: "Erro ao criar usuário"});
        }
   } catch (err) {
        return res.status(500).json({erro: "Erro ao criar usuário", mensagem: err.message});
   }
}

async function listarUsuarios(req, res) {
    try{
        const retorno = await usuarioService.listarUsuarios();
        if(!retorno){
            return res.status(500).json({erro: "Erro ao listar usuários"});
        }
        res.json(retorno);
    }catch(err){
        return res.status(500).json({erro: "Erro ao listar usuários"});
    }
}

async function listarUsuarioId(req, res) {
    try{
        const {id} = req.params;
        const retorno = await usuarioService.listarUsuarioId(id);
        if(!retorno){
            return res.status(500).json({erro: "Erro ao listar usuário"});
        }
        res.json(retorno);

    }catch(err){
        return res.status(500).json({erro: "Erro ao listar usuário"});
    }
}  

async function atualizarUsuario(req, res) {
    try{
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        if(await usuarioService.atualizarUsuario(id, nome, email, senha)){
            return res.json({mensagem: "Usuário atualizado com sucesso"});
        }else{
            return res.status(500).json({erro: "Erro ao atualizar usuário"});
        }
    }catch(err){
        return res.status(500).json({erro: "Erro ao atualizar usuário"});
    }
}

async function deletarUsuario(req, res) {
    try{
        const {id} = req.params;
        if(await usuarioService.deletarUsuario(id)){
            res.json({mensagem: "Usuário deletado com sucesso"});
        }else{
            return res.status(500).json({erro: "Erro ao deletar usuário"});
        }
    }catch(err){
        res.status(500).json({erro: "Erro ao deletar usuário"});
    }
}

module.exports = {
    criarUsuario,
    listarUsuarios,
    listarUsuarioId,
    atualizarUsuario,
    deletarUsuario
};