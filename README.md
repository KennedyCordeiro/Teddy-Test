# Sistema de Gerenciamento de Clientes

Sistema completo de gerenciamento de clientes desenvolvido com React + TypeScript + Vite, com arquitetura de micro-frontends e containerização Docker.

## 🚀 Funcionalidades

- ✅ **Tela de Login**: Interface simples para inserção do nome do usuário
- ✅ **Gerenciamento de Clientes**: CRUD completo (Criar, Ler, Atualizar, Deletar)
- ✅ **Seleção de Clientes**: Sistema de seleção múltipla de clientes
- ✅ **Interface Responsiva**: Design adaptável para desktop e mobile
- ✅ **TypeScript**: Tipagem forte para maior segurança
- ✅ **Arquitetura Limpa**: Componentização e estrutura organizada

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Docker** - Containerização
- **Nginx** - Servidor web

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose (opcional)
- Git

## 🚀 Como Executar

### Opção 1: Desenvolvimento Local

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd teddy-test

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Opção 2: Docker

```bash
# Build e execução com Docker Compose
docker-compose up --build

# Ou apenas build da imagem
docker build -t teddy-test .
docker run -p 3000:80 teddy-test
```

A aplicação estará disponível em `http://localhost:3000`

### Opção 3: Desenvolvimento com Docker

```bash
# Executar em modo desenvolvimento
docker-compose --profile dev up --build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Home.tsx        # Tela de login
│   └── ClientsManagement.tsx  # Gerenciamento de clientes
├── interfaces/          # Tipos TypeScript
│   └── user.ts         # Interface User
├── services/           # Serviços de API
│   ├── api.ts          # Configuração do Axios
│   └── userService.ts  # Serviços de usuário
├── App.tsx             # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🎯 Funcionalidades Detalhadas

### Tela de Login (`/`)

- Interface limpa e moderna
- Validação de entrada
- Armazenamento do nome do usuário
- Redirecionamento automático

### Gerenciamento de Clientes (`/clients`)

- **Adicionar Clientes**: Formulário com validação
- **Listar Clientes**: Exibição com contador
- **Selecionar Clientes**: Sistema de seleção múltipla
- **Deletar Clientes**: Remoção com confirmação
- **Visualizar Selecionados**: Lista dos clientes selecionados
- **Logout**: Botão para sair do sistema

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## 🐳 Docker

### Build da Imagem

```bash
docker build -t teddy-test .
```

### Execução

```bash
docker run -p 3000:80 teddy-test
```

### Docker Compose

```bash
# Produção
docker-compose up --build

# Desenvolvimento
docker-compose --profile dev up --build
```

## 🚀 Deploy na Vercel

1. **Conecte seu repositório** na Vercel
2. **Configure as variáveis de ambiente** se necessário
3. **Deploy automático** será feito a cada push

### Configuração Manual

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

## 🧪 Testes

### Testes Unitários (Diferencial)

```bash
# Instalar dependências de teste
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Executar testes
npm test
```

### Testes E2E (Diferencial)

```bash
# Instalar Playwright
npm install --save-dev @playwright/test

# Executar testes E2E
npx playwright test
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🎨 Design System

- **Cores**: Gradiente roxo/azul (#667eea → #764ba2)
- **Tipografia**: Sistema de fontes do sistema
- **Componentes**: Estilização inline para performance
- **Animações**: Transições suaves e hover effects

## 🔒 Segurança

- Headers de segurança configurados no Nginx
- Validação de entrada em formulários
- Sanitização de dados
- HTTPS recomendado para produção

## 📊 Performance

- Build otimizado com Vite
- Lazy loading de componentes
- Cache de assets estáticos
- Compressão gzip

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido para teste de vaga de desenvolvedor React.

---

**Nota**: Este projeto foi desenvolvido como teste técnico e demonstra conhecimento em React, TypeScript, Docker e boas práticas de desenvolvimento.
