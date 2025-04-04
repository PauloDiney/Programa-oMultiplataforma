import React, { useState } from "react";
import "./CSS/projeto.css";

const Projetos = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [projetos, setProjetos] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    equipe: "",
    descricao: "",
    valor: "",
    dataInicio: "",
    dataFinal: "",
    status: "",
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProjeto = {
      id: projetos.length + 1,
      ...formData,
    };
    setProjetos([...projetos, novoProjeto]);
    setFormData({
      nome: "",
      equipe: "",
      descricao: "",
      valor: "",
      dataInicio: "",
      dataFinal: "",
      status: "",
    });
    setActiveSection("consultar");
  };

  const handleDelete = (id) => {
    const atualizado = projetos.filter((proj) => proj.id !== id);
    setProjetos(atualizado);
  };

  return (
    <div className="projetos">
      <h2>Projetos</h2>

      <div className="projetos-menu">
        <button onClick={() => handleSectionChange("criar")}>Criar</button>
        <button onClick={() => handleSectionChange("consultar")}>
          Consultar
        </button>
      </div>

      <main>
        {activeSection === "criar" && (
          <div className="section criar">
            <h2>Criar Projeto</h2>
            <form className="projetos_form" onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome do Projeto:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <label htmlFor="equipe">Equipe:</label>
              <input
                type="text"
                id="equipe"
                name="equipe"
                value={formData.equipe}
                onChange={handleChange}
                required
              />

              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
              />

              <label htmlFor="valor">Valor:</label>
              <input
                type="number"
                id="valor"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                required
              />

              <label htmlFor="dataInicio">Data de Início:</label>
              <input
                type="date"
                id="dataInicio"
                name="dataInicio"
                value={formData.dataInicio}
                onChange={handleChange}
                required
              />

              <label htmlFor="dataFinal">Data Final:</label>
              <input
                type="date"
                id="dataFinal"
                name="dataFinal"
                value={formData.dataFinal}
                onChange={handleChange}
                required
              />

              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Planejamento">Planejamento</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
              </select>

              <button type="submit">Criar Projeto</button>
            </form>
          </div>
        )}

        {activeSection === "consultar" && (
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
                      <td data-label="Data Início">{proj.dataInicio}</td>
                      <td data-label="Data Final">{proj.dataFinal}</td>
                      <td data-label="Status">{proj.status}</td>
                      <td data-label="Ações">
                        <button onClick={() => handleDelete(proj.id)}>
                          Excluir
                        </button>
                        <button onClick={() => handleDelete(proj.id)}>
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Projetos;
