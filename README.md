# Encurtador de Link — Frontend

Interface web para o [Encurtador de URL](#), permitindo encurtar links de forma simples e rápida.

Frontend desenvolvido em React, consumindo a API REST construída em Spring Boot.

## Sobre

Transforme links longos em URLs curtas e fáceis de compartilhar. Cole o link, clique em encurtar e pronto — sem cadastro, sem complicação.

## Funcionalidades

- Encurtar uma URL colando o link original
- Copiar o link encurtado com um clique
- Interface simples e responsiva

## Tecnologias

- React
- Vite
- React Router DOM
- Axios (consumo da API)
- CSS puro (variáveis CSS para tema)

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Backend do encurtador rodando (veja o [repositório da API](#))

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/encurtador-url-frontend.git
cd encurtador-url-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure a URL da API (se necessário, crie um `.env`):

```env
VITE_API_URL=http://localhost:8080
```

4. Rode o projeto:

```bash
npm run dev
```

A aplicação sobe em `http://localhost:5173`.

## Próximos passos

- [ ] Deploy em produção
- [ ] Feedback visual de loading ao encurtar
- [ ] Histórico de links encurtados
- [ ] Tratamento de erros (link inválido, etc)

## Autor

Ryan Falcão — desenvolvido como parte dos estudos em React e integração full-stack.
