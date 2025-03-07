const prompt = require('prompt-sync')();
const {criarProjeto, listarProjetos, atualizarProjeto, deletarProjeto} = require('./crud_projeto');
const {criarMembro, listarMembros, atualizarMembro, deletarMembro} = require('./crud_membros');
const {criarTarefa, listarTarefas, atualizarTarefa, deletarTarefa} = require('./crud_tarefas');

async function exibirOpcoesProjetos() {
    console.log("=====================================");
    console.log("1 - Cadastrar Projeto");
    console.log("2 - Listar Projetos");
    console.log("3 - Atualizar Projeto");
    console.log("4 - Deletar Projeto");
    console.log("5 - Voltar");
    console.log("=====================================");


    const opcaoProjeto = prompt("Escolha uma opção: ");
    switch(opcaoProjeto) {
        case '1':
            await criarProjeto();
            break;
        case '2':
            await listarProjetos();
            break;
        case '3':
            await atualizarProjeto();
            break;
        case '4':
            await deletarProjeto();
            break;
        case '5':
            exibirOpcoes();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
    await exibirOpcoesProjetos();
}


async function exibirOpcoesMembros() {
    console.log("=====================================");
    console.log("1 - Cadastrar Membro");
    console.log("2 - Listar Membros");
    console.log("3 - Atualizar Membro");
    console.log("4 - Deletar Membro");
    console.log("5 - Voltar");
    console.log("=====================================");

    const opcaoMembro = prompt("Escolha uma opção: ");
    switch(opcaoMembro) {
        case '1':
            await criarMembro();
            break;
        case '2':
            await listarMembros();
            break;
        case '3':
            await atualizarMembro();
            break;
        case '4':
            await deletarMembro();
            break;
        case '5':
            exibirOpcoes();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
    await exibirOpcoesMembros();
}

async function exibirOpcoesTarefas() {
    console.log("=====================================");
    console.log("1 - Cadastrar Tarefa");
    console.log("2 - Listar Tarefas");
    console.log("3 - Atualizar Tarefa");
    console.log("4 - Deletar Tarefa");
    console.log("5 - Voltar");
    console.log("=====================================");

    const opcaoTarefa = prompt("Escolha uma opção: ");
    switch(opcaoTarefa) {
        case '1':
            await criarTarefa();
            break;
        case '2':
            await listarTarefas();
            break;
        case '3':
            await atualizarTarefa();
            break;
        case '4':
            await deletarTarefa();
            break;
        case '5':
            exibirOpcoes();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
    await exibirOpcoesTarefas();
}

async function exibirOpcoes(){
    console.log("=====================================");
    console.log("1 - Projetos");
    console.log("2 - Membros");
    console.log("3 - Tarefas");
    console.log("4 - Sair");
    console.log("=====================================");

    const opcao = prompt("Escolha uma opção: ");
    switch(opcao) {
        case '1':
            await exibirOpcoesProjetos();
            break;
        case '2':
            await exibirOpcoesMembros();
            break;
        case '3':
            await exibirOpcoesTarefas();
            break;
        case '4':
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

exibirOpcoes();