import React, { useState } from "react";
import "./CSS/mebros.css";

const Membros = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [membros, setMembros] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    formacao: "",
    equipe: "",
    contato: "",
    cargo: "",
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
    const novoMembro = {
      id: membros.length + 1,
      ...formData,
    };
    setMembros([...membros, novoMembro]);
    setFormData({
      nome: "",
      formacao: "",
      equipe: "",
      contato: "",
      cargo: "",
    });
    setActiveSection("consultar");
  };

  const handleDelete = (id) => {
    const atualizado = membros.filter((m) => m.id !== id);
    setMembros(atualizado);
  };

  return (
    <div className="membros">
      <h2>Membros</h2>

      <div className="membros-menu">
        <button onClick={() => handleSectionChange("criar")}>Criar</button>
        <button onClick={() => handleSectionChange("consultar")}>
          Consultar
        </button>
      </div>

      <main>
        {activeSection === "criar" && (
          <div className="section criar">
            <h2>Adicionar Membro</h2>
            <form className="membros_form" onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <label htmlFor="formacao">Formação:</label>
              <input
                type="text"
                id="formacao"
                name="formacao"
                value={formData.formacao}
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

              <label htmlFor="contato">Contato:</label>
              <input
                type="text"
                id="contato"
                name="contato"
                value={formData.contato}
                onChange={handleChange}
                required
              />

              <label htmlFor="cargo">Cargo:</label>
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
              />

              <button type="submit">Adicionar Membro</button>
            </form>
          </div>
        )}

        {activeSection === "consultar" && (
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
                  {membros.map((m) => (
                    <tr key={m.id}>
                      <td data-label="ID">{m.id}</td>
                      <td data-label="Nome">{m.nome}</td>
                      <td data-label="Formação">{m.formacao}</td>
                      <td data-label="Equipe">{m.equipe}</td>
                      <td data-label="Contato">{m.contato}</td>
                      <td data-label="Cargo">{m.cargo}</td>
                      <td data-label="Ações">
                        <button onClick={() => handleDelete(m.id)}>
                          Excluir
                        </button>
                        <button onClick={() => handleDelete(m.id)}>
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

export default Membros;
