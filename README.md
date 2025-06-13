Projeto Final de Mobile 

API usada - https://superheroapi.com/

IMPORTANTE:

Se for usar o Expo no celular tire a '//' da lina 8 do codigo do arquivo e acrescente na linha 4 'SuperHeroApi.js' que esta dentro da pasta src , dentro de hooks

Se for usar o modo WEB faça o contrario, tire a '//' da lina 4 do codigo do arquivo e acrescente na linha 8


🔧 Tecnologias Utilizadas (presumidas)
Frontend: React Native (Expo), React Navigation, Firebase Auth/DB

Backend: Node.js, Express.js, Firebase Admin SDK

# 💥 Projeto Mobile + Backend com Firebase

Este repositório contém uma aplicação **mobile desenvolvida com React Native (Expo)** e um **backend em Node.js (Express)**. A comunicação é feita via **API REST**, com autenticação e armazenamento utilizando o **Firebase** e conexão externa via **ngrok**.

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
git clone https://github.com/DFL010492/Mobile_Final_3
cd Mobile_Final_3

Instalar Dependências

No visualcode abra um terminal para o express e outro para Mobile_Final_2

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


Tem que ter o ngrok para funcionar 

Usando o Ngrok
Para tornar o backend acessível via internet:

Instale o ngrok (https://ngrok.com/downloads/linux)
No terminal, execute: ngrok http 5000
Copie a URL gerada a frente da palavra 'Forwarding' exemplo: "https://e1b0-131-72-222-133.ngrok-free.app", pegue essa parte e substitua (apenas do "https" até "app" na linha) na linha 26 no codigo do Login.js, na linha 48 no Cadastro.js e linha 19 no Perfil.js.


📱 Frontend

cd Mobile_Final_2
npm run start