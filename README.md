
# 📝 userTask-Login

Aplicação web simples de lista de tarefas (To-Do List) com troca de usuários. Desenvolvida em **React**, utilizando **Context API** para gerenciamento global de estado e **Axios** para requisições à API de usuários.

---

## 📌 Descrição

Este projeto tem como objetivo demonstrar os princípios de componentização, consumo de APIs e gerenciamento de estado em aplicações front-end com React. Cada usuário possui uma lista de tarefas individual que pode ser gerenciada (adicionar, concluir e excluir tarefas).

---

## ⚙️ Funcionalidades

- ✅ **Adicionar Tarefas**: Crie novas tarefas para o usuário atual.
- 🗂 **Listagem de Tarefas**: Exibe todas as tarefas do usuário selecionado.
- ✏️ **Marcar como Concluída**: Altere o status da tarefa com um clique.
- ❌ **Excluir Tarefas**: Remova tarefas específicas da lista.
- 🔄 **Trocar de Usuário**: Permite alternar entre diferentes usuários simulados pela API.
- 🔒 **Context API**: Uso de contexto global para compartilhar dados entre componentes.
- 🌐 **Consumo de API**: Axios é utilizado para buscar usuários dinamicamente.

---

## 🖼️ Prévia da Interface

> *(Se desejar, você pode adicionar aqui um gif ou imagem demonstrando a aplicação)*

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| [React](https://reactjs.org) | Biblioteca JavaScript para construção de interfaces |
| [Axios](https://axios-http.com) | Cliente HTTP para requisições assíncronas |
| [Context API](https://reactjs.org/docs/context.html) | Gerenciamento de estado global |
| [Vite](https://vitejs.dev/) | Build tool para projetos React com hot reload |
| [CSS Modules](https://github.com/css-modules/css-modules) | Estilização com escopo local |

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js >= 14.x
- npm ou yarn

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/bebetofreitass/userTask-Login.git

# Acesse o diretório do projeto
cd userTask-Login

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra o navegador em [http://localhost:5173](http://localhost:5173) para visualizar a aplicação.

---

## 📁 Estrutura de Pastas

```
userTask-Login/
├── public/
├── src/
│   ├── components/     # Componentes reutilizáveis (Header, TaskList, UserSelector, etc.)
│   ├── context/        # Contexto global (TaskContext)
│   ├── services/       # Arquivos de configuração de API (Axios)
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Entrada da aplicação
├── package.json
└── vite.config.js
```

---

## 🔗 API Utilizada

A aplicação consome dados fictícios de usuários da seguinte API:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram exercitados:

- Criação e consumo de Context API no React
- Separação de responsabilidades por componentes
- Práticas de clean code e componentização
- Interação com APIs externas usando Axios
- Estilização modularizada com CSS

---

## 🧑‍💻 Autor

Desenvolvido por **[@bebetofreitass](https://github.com/bebetofreitass)**  
Sinta-se à vontade para abrir issues, contribuir ou entrar em contato!

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
