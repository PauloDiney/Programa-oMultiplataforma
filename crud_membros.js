const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarMembro() {
    const nome = prompt('Nome do Membro:');
    const formacao = prompt('Formacao do Membro:');
    const equipe = prompt('Equipe do Membro:');
    const contato = prompt('Contato do Membro:');
    const cargo = prompt('Cargo do Membro:');

    const sql = "INSERT INTO membros (nome, formacao, equipe, contato, cargo) VALUES (?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, formacao, equipe, contato, cargo]);
        console.log("Membro criado com sucesso!");
    }
    catch (err) {
        console.log("Erro ao criar membro: " + err);
    }
};

async function listarMembros() {
    const sql = "SELECT * FROM membros";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    }
    catch (err) {
        console.log("Erro ao listar membros: " + err);
    }
};

async function atualizarMembro() {
    const id = prompt('ID do Membro:');
    const nome = prompt('Nome do Membro:');
    const formacao = prompt('Formacao do Membro:');
    const equipe = prompt('Equipe do Membro:');
    const contato = prompt('Contato do Membro:');
    const cargo = prompt('Cargo do Membro:');

    const sql = "UPDATE membros SET nome = ?, formacao = ?, equipe = ?, contato = ?, cargo = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, formacao, equipe, contato, cargo, id]);
        console.log("Membro atualizado com sucesso!");
    }
    catch (err) {
        console.log("Erro ao atualizar membro: " + err);
    }
};

async function deletarMembro() {
    const id = prompt('ID do Membro:');

    const sql = "DELETE FROM membros WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        console.log("Membro deletado com sucesso!");
    }
    catch (err) {
        console.log("Erro ao deletar membro: " + err);
    }
};

module.exports = {
    criarMembro,
    listarMembros,
    atualizarMembro,
    deletarMembro
};