import React, { useState, useEffect } from "react";
import "./CSS/membros.css";
import api from "../api";

const Membros = () => {
  const [membros, setMembros] = useState([]);

  // Função para buscar os membros da API
  const fetchMembros = async () => {
    try {
      const response = await api.get("/membros");
      console.log("Dados recebidos:", response.data);
      setMembros(response.data);
    } catch (error) {
      console.error("Erro ao buscar membros:", error);
    }
  };

  // Carregar os membros ao montar o componente
  useEffect(() => {
    fetchMembros();
  }, []);

  // Função para criar um novo membro
  const handleCreate = async (novoMembro) => {
    try {
      await api.post("/membros", novoMembro);
      fetchMembros();
    } catch (error) {
      console.error("Erro ao criar membro:", error);
    }
  };

  // Função para excluir um membro
  const handleDelete = async (id) => {
    try {
      await api.delete(`/membros/${id}`);
      fetchMembros();
    } catch (error) {
      console.error("Erro ao excluir membro:", error);
    }
  };

  return (
    <div className="membros">
      <h2>Membros</h2>

      <div className="section criar">
        <h2>Criar Membro</h2>
        <form
          className="membros_form"
          onSubmit={(e) => {
            e.preventDefault();
            const novoMembro = {
              nome: e.target.nome.value,
              formacao: e.target.formacao.value,
              equipe: e.target.equipe.value,
              contato: e.target.contato.value,
              cargo: e.target.cargo.value,
            };
            handleCreate(novoMembro);
            e.target.reset();
          }}
        >
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="formacao">Formação:</label>
          <input type="text" id="formacao" name="formacao" required />

          <label htmlFor="equipe">Equipe:</label>
          <input type="text" id="equipe" name="equipe" required />

          <label htmlFor="contato">Contato:</label>
          <input type="text" id="contato" name="contato" required />

          <label htmlFor="cargo">Cargo:</label>
          <input type="text" id="cargo" name="cargo" required />

          <button type="submit">Criar Membro</button>
        </form>
      </div>

      <div className="section consultar">
        <h2>Consultar Membros</h2>
        {membros.length === 0 ? (
          <p>Nenhum membro cadastrado.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Formação</th>
                <th>Equipe</th>
                <th>Contato</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {membros.map((membro) => (
                <tr key={membro.id}>
                  <td data-label="ID">{membro.id}</td>
                  <td data-label="Nome">{membro.nome}</td>
                  <td data-label="Formação">{membro.formacao}</td>
                  <td data-label="Equipe">{membro.equipe}</td>
                  <td data-label="Contato">{membro.contato}</td>
                  <td data-label="Cargo">{membro.cargo}</td>
                  <td data-label="Ações">
                    <button onClick={() => handleDelete(membro.id)}>Excluir</button>
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

export default Membros;
