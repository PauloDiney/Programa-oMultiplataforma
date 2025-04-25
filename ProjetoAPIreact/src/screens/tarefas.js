import React, { useState, useEffect } from "react";
import "./CSS/tarefas.css";
import api from "../api";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  // Função para buscar as tarefas da API
  const fetchTarefas = async () => {
    try {
      const response = await api.get("/tarefas");
      console.log("Dados recebidos:", response.data);
      setTarefas(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Carregar as tarefas ao montar o componente
  useEffect(() => {
    fetchTarefas();
  }, []);

  // Função para criar uma nova tarefa
  const handleCreate = async (novaTarefa) => {
    try {
      await api.post("/tarefas", novaTarefa);
      fetchTarefas();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  // Função para excluir uma tarefa
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tarefas/${id}`);
      fetchTarefas();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  // Função para formatar datas "yyyy-mm-dd" → "dd/mm/yyyy"
  const formatarData = (dataStr) => {
    if (!dataStr) return "N/A";
    const data = new Date(dataStr + "T00:00:00");
    return isNaN(data) ? "N/A" : data.toLocaleDateString("pt-BR");
  };

  return (
    <div className="tarefas">
      <h2>Tarefas</h2>

      <div className="section criar">
        <h2>Criar Tarefa</h2>
        <form
          className="tarefas_form"
          onSubmit={(e) => {
            e.preventDefault();
            const novaTarefa = {
              nome: e.target.nome.value,
              membro: e.target.membro.value,
              projeto: e.target.projeto.value,
              dataStart: e.target.dataInicio.value,
              dataEnd: e.target.dataFinal.value,
              descricao: e.target.descricao.value,
            };
            handleCreate(novaTarefa);
            e.target.reset();
          }}
        >
          <label htmlFor="nome">Nome da Tarefa:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="membro">Membro Responsável:</label>
          <input type="text" id="membro" name="membro" required />

          <label htmlFor="projeto">Projeto Relacionado:</label>
          <input type="text" id="projeto" name="projeto" required />

          <label htmlFor="dataInicio">Data de Início:</label>
          <input type="date" id="dataInicio" name="dataInicio" required />

          <label htmlFor="dataFinal">Data Final:</label>
          <input type="date" id="dataFinal" name="dataFinal" required />

          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" required />

          <button type="submit">Criar Tarefa</button>
        </form>
      </div>

      <div className="section consultar">
        <h2>Consultar Tarefas</h2>
        {tarefas.length === 0 ? (
          <p>Nenhuma tarefa cadastrada.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Membro</th>
                <th>Projeto</th>
                <th>Data Início</th>
                <th>Data Final</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tarefas.map((tarefa) => (
                <tr key={tarefa.id}>
                  <td data-label="ID">{tarefa.id}</td>
                  <td data-label="Nome">{tarefa.nome}</td>
                  <td data-label="Membro">{tarefa.membro}</td>
                  <td data-label="Projeto">{tarefa.projeto}</td>
                  <td data-label="Data Início">{formatarData(tarefa.dataStart)}</td>
                  <td data-label="Data Final">{formatarData(tarefa.dataEnd)}</td>
                  <td data-label="Descrição">{tarefa.descricao}</td>
                  <td data-label="Ações">
                    <button onClick={() => handleDelete(tarefa.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tarefas;
