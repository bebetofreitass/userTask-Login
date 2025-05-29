# 📋 Lista de Atividades (To-Do List)

Aplicação web para gerenciamento de tarefas. Permite adicionar, marcar como concluídas e excluir tarefas, além de trocar de usuário.

---

## 🚀 Tecnologias

- [React]
- [Context API]
- [Axios]
- [Node.js

---

## 🧩 Funcionalidades

- ✅ Adicionar uma nova tarefa
- ✏️ Marcar tarefa como concluída
- ❌ Remover tarefa
- 👥 Trocar de usuário (com dados dinâmicos da API)
- 📦 Persistência via contexto (TaskContext)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone # Clone o repositório
git clone https://github.com/bebetofreitass/userTask-Login.git

# Acesse a pasta do projeto
cd userTask-Login

# Instale as dependências
npm install

# Inicie o projeto
npm run server
npm run dev

```

---

## 🔌 Requisitos

- Node.js v16+
- npm
- Conexão com a API (ex: `/users`, `/tasks`)

---

## 🌐 Estrutura de Pastas

```
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── UserSwitcher.jsx
├── context/
│   └── TaskProvider.jsx
├── service/
│   └── api.js
├── App.jsx
└── main.jsx
```

---

## 📁 API Esperada (Exemplo)

- `GET /users` → Lista de usuários
- `GET /tasks?userId=x` → Tarefas de um usuário
- `POST /tasks` → Adiciona tarefa
- `DELETE /tasks/:id` → Remove tarefa
- `PATCH /tasks/:id` → Atualiza tarefa (ex: toggle)

---

## 🧠 Melhorias futuras

- 🔒 Autenticação de usuário
- 📱 Responsividade mobile
- ☁️ Integração com banco de dados real

---

## 🤝 Contribuição

Sinta-se à vontade para abrir *issues*, sugerir melhorias ou enviar *pull requests*!

---

