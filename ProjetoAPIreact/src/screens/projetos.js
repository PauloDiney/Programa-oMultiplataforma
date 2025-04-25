import React, { useState, useEffect } from "react";
import "./CSS/projeto.css";
import api from "../api";

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);

  // Função para buscar os projetos da API
  const fetchProjetos = async () => {
    try {
      const response = await api.get("/projetos");
      console.log("Dados recebidos:", response.data);
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  // Carregar os projetos ao montar o componente
  useEffect(() => {
    fetchProjetos();
  }, []);

  // Função para criar um novo projeto
  const handleCreate = async (novoProjeto) => {
    try {
      await api.post("/projetos", novoProjeto);
      fetchProjetos();
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
    }
  };

  // Função para excluir um projeto
  const handleDelete = async (id) => {
    try {
      await api.delete(`/projetos/${id}`);
      fetchProjetos();
    } catch (error) {
      console.error("Erro ao excluir projeto:", error);
    }
  };

  // Função para formatar datas "yyyy-mm-dd" → "dd/mm/yyyy"
  const formatarData = (dataStr) => {
    if (!dataStr) return "N/A";
    const data = new Date(dataStr + "T00:00:00");
    return isNaN(data) ? "N/A" : data.toLocaleDateString("pt-BR");
  };

  return (
    <div className="projetos">
      <h2>Projetos</h2>

      <div className="section criar">
        <h2>Criar Projeto</h2>
        <form
          className="projetos_form"
          onSubmit={(e) => {
            e.preventDefault();
            const novoProjeto = {
              nome: e.target.nome.value,
              equipe: e.target.equipe.value,
              descricao: e.target.descricao.value,
              valor: e.target.valor.value,
              datainicio: e.target.dataInicio.value,
              datafinal: e.target.dataFinal.value,
              status: e.target.status.value,
            };
            handleCreate(novoProjeto);
            e.target.reset();
          }}
        >
          <label htmlFor="nome">Nome do Projeto:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="equipe">Equipe:</label>
          <input type="text" id="equipe" name="equipe" required />

          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" required />

          <label htmlFor="valor">Valor:</label>
          <input type="number" id="valor" name="valor" required />

          <label htmlFor="dataInicio">Data de Início:</label>
          <input type="date" id="dataInicio" name="dataInicio" required />

          <label htmlFor="dataFinal">Data Final:</label>
          <input type="date" id="dataFinal" name="dataFinal" required />

          <label htmlFor="status">Status:</label>
          <select id="status" name="status" required>
            <option value="">Selecione</option>
            <option value="Planejamento">Planejamento</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>

          <button type="submit">Criar Projeto</button>
        </form>
      </div>

      <div className="section consultar">
        <h2>Consultar Projetos</h2>
        {projetos.length === 0 ? (
          <p>Nenhum projeto cadastrado.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Equipe</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data Início</th>
                <th>Data Final</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projetos.map((proj) => (
                <tr key={proj.id}>
                  <td data-label="ID">{proj.id}</td>
                  <td data-label="Nome">{proj.nome}</td>
                  <td data-label="Equipe">{proj.equipe}</td>
                  <td data-label="Descrição">{proj.descricao}</td>
                  <td data-label="Valor">R$ {proj.valor}</td>
                  <td data-label="Data Início">{formatarData(proj.datainicio)}</td>
                  <td data-label="Data Final">{formatarData(proj.datafinal)}</td>
                  <td data-label="Status">{proj.status}</td>
                  <td data-label="Ações">
                    <button onClick={() => handleDelete(proj.id)}>Excluir</button>
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

export default Projetos;
