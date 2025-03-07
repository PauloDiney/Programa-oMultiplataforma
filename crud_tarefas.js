const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarTarefa(){
    const nome = prompt('Nome da Tarefa:');
    const membro = prompt('Membro Responsavel:');
    const projeto = prompt('Projeto da Tarefa:');
    const dataStart = prompt('Data de Inicio:');
    const dataEnd = prompt('Data de Termino:');
    const prazo = prompt('Prazo da Tarefa:');
    const descricao = prompt('Descricao da Tarefa:');

    const sql = "INSERT INTO tarefas (nome, membro, projeto, dataStart, dataEnd, descricao) VALUES (?, ?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, membro, projeto, dataStart, dataEnd, descricao]);
        console.log("Tarefa criada com sucesso!");
    }
    catch (err) {
        console.log("Erro ao criar tarefa: " + err);
    }

}

async function listarTarefas(){
    const sql = "SELECT * FROM tarefas";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    }
    catch (err) {
        console.log("Erro ao listar tarefas: " + err);
    }
}

async function atualizarTarefa(){
    const id = prompt('ID da Tarefa:');
    const nome = prompt('Nome da Tarefa:');
    const membro = prompt('Membro Responsavel:');
    const projeto = prompt('Projeto da Tarefa:');
    const dataStart = prompt('Data de Inicio:');
    const dataEnd = prompt('Data de Termino:');
    const descricao = prompt('Descricao da Tarefa:');

    const sql = "UPDATE tarefas SET nome = ?, membro = ?, projeto = ?, dataStar = ?, dataEnd = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, membro, projeto, dataStart, dataEnd, descricao, id]);
        console.log("Tarefa atualizada com sucesso!");
    }
    catch (err) {
        console.log("Erro ao atualizar tarefa: " + err);
    }
}

async function deletarTarefa(){
    const id = prompt('ID da Tarefa:');

    const sql = "DELETE FROM tarefas WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        console.log("Tarefa deletada com sucesso!");
    }
    catch (err) {
        console.log("Erro ao deletar tarefa: " + err);
    }
}

module.exports = {
    criarTarefa,
    listarTarefas,
    atualizarTarefa,
    deletarTarefa
};