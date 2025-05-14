Projeto Final de Mobile 

API usada - https://superheroapi.com/

IMPORTANTE:

Se for usar o Expo no celular tire a '//' da lina 8 do codigo do arquivo e acrescente na linha 4 'SuperHeroApi.js' que esta dentro da pasta src , dentro de hooks

Se for usar o modo WEB faça o contrario, tire a '//' da lina 4 do codigo do arquivo e acrescente na linha 8

📦 Projeto
├── 📁 express/                  # Backend Node.js (API REST)
│   ├── 📁 routes/               # Rotas da API
│   │   ├── authRoutes.js       # Rotas de autenticação
│   │   ├── firebaseConfig.js   # Configuração Firebase (backend)
│   ├── server.js               # Inicialização do servidor Express
│   ├── package.json            # Dependências do backend
│
├── 📁 Mobile_Final_2/          # Frontend Mobile com React Native
│   ├── 📁 assets/              # Imagens do app
│   ├── 📁 src/                 # Código-fonte da aplicação
│   │   ├── 📁 components/      # Componentes reutilizáveis
│   │   │   ├── LoadingOver.js
│   │   │   ├── Menu.js
│   │   │   └── UserMenu.js
│   │   ├── 📁 hooks/           # Hooks personalizados
│   │   │   └── SuperHeroAPI.js
│   │   ├── 📁 navigation/      # Navegação entre telas
│   │   │   └── AppNavigator.js
│   │   ├── 📁 screens/         # Telas principais do aplicativo
│   │   │   ├── 📁 style/       # Estilos CSS-in-JS
│   │   │   │   ├── BatStyles.js
│   │   │   │   ├── CadastroStyle.js
│   │   │   │   └── LoginStyle.js
│   │   │   ├── BatDataBase.js
│   │   │   ├── Cadastro.js
│   │   │   ├── Config.js
│   │   │   ├── Login.js
│   │   │   ├── Perfil.js
│   │   │   └── App.js
│   │   ├── firebaseConfig.js   # Configuração Firebase (mobile)
│   │   └── index.js            # Entrada principal do app
│   ├── app.json                # Configurações do app Expo
│   ├── package.json            # Dependências do frontend
│
├── README.md    


🔧 Tecnologias Utilizadas (presumidas)
Frontend: React Native (Expo), React Navigation, Firebase Auth/DB

Backend: Node.js, Express.js, Firebase Admin SDK

# 💥 Projeto Mobile + Backend com Firebase

Este repositório contém uma aplicação **mobile desenvolvida com React Native (Expo)** e um **backend em Node.js (Express)**. A comunicação é feita via **API REST**, com autenticação e armazenamento utilizando o **Firebase** e conexão externa via **ngrok**.

---

## 📁 Estrutura do Projeto


---

## 🔧 Tecnologias Utilizadas

### 📱 Frontend (Mobile - Expo)
- React Native
- Expo
- Firebase (Auth + Firestore)
- React Navigation

### 🌐 Backend (Node.js)
- Express.js
- Firebase Admin SDK
- JWT (se aplicável)

### 🔗 Outros
- **ngrok** (para expor o backend local)

---

## 🚀 Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instalar Dependências

🔙 Backend (Express)

cd express
npm install

📱 Frontend (React Native)

cd Mobile_Final_2
npm install

Executar o Projeto
🔙 Backend

cd express
node server.js


Usando o Ngrok
Para tornar o backend acessível via internet (usado no app mobile):

Instale o ngrok (https://ngrok.com/downloads/linux)
No CMD
No terminal, execute:

ngrok http 3000
Copie a URL gerada, por exemplo: https://abcd1234.ngrok.io

Substitua no app mobile onde estiver a URL base da API.

📱 Frontend

cd Mobile_Final_2
npx expo start