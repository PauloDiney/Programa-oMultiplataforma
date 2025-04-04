import React, { useState } from "react";
import "./CSS/tarefas.css";

const Tarefas = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [tarefas, setTarefas] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    membro: "",
    projeto: "",
    dataStart: "",
    dataEnd: "",
    descricao: "",
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
    const novaTarefa = {
      id: tarefas.length + 1,
      ...formData,
    };
    setTarefas([...tarefas, novaTarefa]);
    setFormData({
      nome: "",
      membro: "",
      projeto: "",
      dataStart: "",
      dataEnd: "",
      descricao: "",
    });
    setActiveSection("consultar");
  };

  const handleDelete = (id) => {
    const atualizado = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(atualizado);
  };

  return (
    <div className="tarefas">
      <h2>Tarefas</h2>

      <div className="tarefas-menu">
        <button onClick={() => handleSectionChange("criar")}>Criar</button>
        <button onClick={() => handleSectionChange("consultar")}>
          Consultar
        </button>
      </div>

      <main>
        {activeSection === "criar" && (
          <div className="section criar">
            <h2>Criar Tarefa</h2>
            <form className="tarefas_form" onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome da Tarefa:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <label htmlFor="membro">Membro Responsável:</label>
              <input
                type="text"
                id="membro"
                name="membro"
                value={formData.membro}
                onChange={handleChange}
                required
              />

              <label htmlFor="projeto">Projeto Relacionado:</label>
              <input
                type="text"
                id="projeto"
                name="projeto"
                value={formData.projeto}
                onChange={handleChange}
                required
              />

              <label htmlFor="dataStart">Data de Início:</label>
              <input
                type="date"
                id="dataStart"
                name="dataStart"
                value={formData.dataStart}
                onChange={handleChange}
                required
              />

              <label htmlFor="dataEnd">Data Final:</label>
              <input
                type="date"
                id="dataEnd"
                name="dataEnd"
                value={formData.dataEnd}
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

              <button type="submit">Criar Tarefa</button>
            </form>
          </div>
        )}

        {activeSection === "consultar" && (
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
                      <td data-label="Data Início">{tarefa.dataStart}</td>
                      <td data-label="Data Final">{tarefa.dataEnd}</td>
                      <td data-label="Descrição">{tarefa.descricao}</td>
                      <td data-label="Ações">
                        <button onClick={() => handleDelete(tarefa.id)}>
                          Excluir
                        </button>
                        <button onClick={() => alert("Função de editar em breve!")}>
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

export default Tarefas;
