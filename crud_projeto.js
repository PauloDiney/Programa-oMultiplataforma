const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarProjeto(){
    const nome = prompt('Nome do Projeto:');
    const equipe = prompt('Equipe Responsavel:');
    const descricao = prompt('Descricao do Projeto:');
    const valor = prompt('Valor do Projeto:');
    const data_inicio = prompt('Data de Inicio:');
    const data_fim = prompt('Data de Termino:');
    const status = prompt('Status do Projeto:');

    const sql = "INSERT INTO projetos (nome, equipe, descricao, valor, datainicio, datafinal, status) VALUES (?, ?, ?, ?, ?, ?, ?)";    

    try{
        const [res] = await conexao.query(sql, [nome, equipe, descricao, valor, data_inicio, data_fim, status]);
        console.log("Projeto criado com sucesso!");

    }catch (err) {
        console.log("Erro ao criar projeto: " + err);
    }

}


async function listarProjetos(){
    const sql = "SELECT * FROM projetos";
    try{
        const [res] = await conexao.query(sql);
        console.table(res);
    }catch (err) {
        console.log("Erro ao listar projetos: " + err);
    }
}

async function atualizarProjeto(){
    const id = prompt('ID do Projeto:');
    const nome = prompt('Nome do Projeto:');
    const equipe = prompt('Equipe Responsavel:');
    const descricao = prompt('Descricao do Projeto:');
    const valor = prompt('Valor do Projeto:');
    const data_inicio = prompt('Data de Inicio:');
    const data_fim = prompt('Data de Termino:');
    const status = prompt('Status do Projeto:');

    const sql = "UPDATE projetos SET nome = ?, equipe = ?, descricao = ?, valor = ?, datainicio = ?, datafinal = ?, status = ? WHERE id = ?";    

    try{
        const [res] = await conexao.query(sql, [nome, equipe, descricao, valor, data_inicio, data_fim, status, id]);
        console.log("Projeto atualizado com sucesso!");

    }catch (err) {
        console.log("Erro ao atualizar projeto: " + err);
    }

}

async function deletarProjeto(){
    const id = prompt('ID do Projeto:');

    const sql = "DELETE FROM projetos WHERE id = ?";    

    try{
        const [res] = await conexao.query(sql, [id]);
        console.log("Projeto deletado com sucesso!");

    }catch (err) {
        console.log("Erro ao deletar projeto: " + err);
    }

}

module.exports = {
    criarProjeto, 
    listarProjetos, 
    atualizarProjeto, 
    deletarProjeto
};