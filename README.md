# Web Movie Finder

Web Movie Finder é uma aplicação web desenvolvida em TypeScript e Vite para pesquisa e exploração de filmes utilizando APIs externas. O projeto fornece uma interface rápida e responsiva para consultar títulos, detalhes e informações relacionadas a filmes.

---

## Tecnologias Utilizadas

* Vite
* TypeScript
* Vitest / Testing Library para testes
* Tanstack/Query and Form
* Axios

---

## Estrutura do Projeto

```
web-movie-finder/
│
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── services/           # Integração com APIs externas
│   ├── hooks/              # Lógica reutilizável
│   ├── utils/              # Funções auxiliares
│   ├── styles/             # Estilos globais
│   └── main.ts             # Ponto de entrada
│
├── __tests__/              # Testes automatizados
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
├── eslint.config.js        # Lint
└── package.json            # Dependências e scripts
```

---

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/mr0xff/web-movie-finder.git
cd web-movie-finder
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar em modo de desenvolvimento

```bash
npm run dev
```

### 4. Build para produção

```bash
npm run build
```

### 5. Executar testes

```bash
npm run test
```

---

## Funcionalidades

* Busca de filmes por título
* Exibição de detalhes do filme
* Informações gerais (ano, avaliação, elenco etc.)
* Interface responsiva
* Testes automatizados

---

## Deploy

Para publicar a aplicação:

1. Execute `npm run build`
2. Hospede o conteúdo da pasta `dist/` em serviços como Vercel, Netlify ou GitHub Pages.

---

## Contribuição

1. Crie um fork do projeto
2. Crie uma branch para sua alteração:

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit:

   ```bash
   git commit -m "feat: descrição da alteração"
   ```
4. Push:

   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request

---

## Licença

Este projeto utiliza a licença MIT.