# Sistema de Gerenciamento de Clientes - Micro-Frontends

Sistema completo de gerenciamento de clientes desenvolvido com React + TypeScript + Vite, utilizando arquitetura de micro-frontends com containerização Docker.

## 🏗️ Arquitetura

### Estrutura de Micro-Frontends

```
src/
├── shell/                    # Container/Shell principal
│   ├── App.tsx              # Aplicação principal
│   └── App.styled.tsx       # Estilos do shell
├── micro-frontends/          # Micro-frontends
│   ├── auth/                # MFE de autenticação
│   │   ├── components/      # Componentes do auth
│   │   └── index.ts         # Exportações
│   ├── clients/             # MFE de gerenciamento de clientes
│   │   ├── components/      # Componentes de clientes
│   │   ├── interfaces/      # Tipos específicos
│   │   ├── services/        # Serviços de API
│   │   └── index.ts         # Exportações
│   └── shared/              # Biblioteca compartilhada
│       ├── components/      # Design System
│       ├── utils/           # Utilitários compartilhados
│       └── index.ts         # Exportações
├── test/                    # Testes
│   ├── setup.ts            # Configuração dos testes
│   ├── components/         # Testes unitários
│   └── e2e/               # Testes end-to-end
└── App.tsx                  # Entry point
```

## 🚀 Funcionalidades

- ✅ **Micro-Frontends**: Arquitetura modular e escalável
- ✅ **Autenticação**: Sistema de login com eventBus
- ✅ **Gerenciamento de Clientes**: CRUD completo
- ✅ **Design System**: Componentes reutilizáveis
- ✅ **Event Bus**: Comunicação entre MFEs
- ✅ **TypeScript**: Tipagem forte
- ✅ **Responsividade**: Design adaptável
- ✅ **Testes Unitários**: Cobertura de componentes
- ✅ **Testes E2E**: Fluxos completos testados

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna
- **React Router DOM** - Roteamento
- **Styled Components** - Estilização
- **Event Bus** - Comunicação entre MFEs
- **Docker** - Containerização
- **Vitest** - Testes unitários
- **Playwright** - Testes E2E

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose (opcional)
- Git

## 🚀 Como Executar

### Desenvolvimento Local

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd teddy-test

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5001`

### Docker

```bash
# Build e execução com Docker Compose
docker-compose up --build

# Ou apenas build da imagem
docker build -t teddy-test .
docker run -p 3000:80 teddy-test
```

## 🏗️ Estrutura dos Micro-Frontends

### Shell (Container)

- **Responsabilidades**: Roteamento, layout global, comunicação entre MFEs
- **Componentes**: Header global, navegação, container principal

### Auth MFE

- **Responsabilidades**: Autenticação, login, logout
- **Componentes**: Login, formulários de autenticação
- **Comunicação**: EventBus para notificar login/logout

### Clients MFE

- **Responsabilidades**: Gerenciamento completo de clientes
- **Componentes**: Lista, formulários, ações CRUD
- **Serviços**: API calls, gerenciamento de estado local

### Shared

- **Responsabilidades**: Design System, utilitários compartilhados
- **Componentes**: Button, Input, etc.
- **Utils**: EventBus, globalStore, etc.

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
npm test             # Executa testes unitários
npm run test:ui      # Interface visual dos testes
npm run test:coverage # Cobertura de testes
npm run test:e2e     # Executa testes E2E
npm run test:e2e:ui  # Interface visual dos testes E2E
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

### Testes Unitários ✅

Cobertura de testes para componentes principais:

```bash
# Executar todos os testes unitários
npm test

# Interface visual dos testes
npm run test:ui

# Cobertura de código
npm run test:coverage
```

**Componentes Testados:**

- ✅ Login Component
- ✅ Button Component
- ✅ EventBus Utility
- ✅ UserService (mocks)

**Cobertura de Testes:**

- Renderização de componentes
- Interações do usuário
- Validações de formulário
- Comunicação entre componentes
- Utilitários e helpers

### Testes E2E ✅

Testes de fluxos completos da aplicação:

```bash
# Executar testes E2E
npm run test:e2E

# Interface visual dos testes E2E
npm run test:e2e:ui
```

**Fluxos Testados:**

- ✅ Login e autenticação
- ✅ Navegação entre páginas
- ✅ Gerenciamento de clientes
- ✅ Responsividade em diferentes dispositivos
- ✅ Interações com modais
- ✅ Logout e redirecionamento

**Navegadores Testados:**

- Chrome, Firefox, Safari
- Mobile Chrome, Mobile Safari

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🎨 Design System

- **Cores**: Gradiente roxo/azul (#667eea → #764ba2)
- **Tipografia**: Sistema de fontes do sistema
- **Componentes**: Button, Input, etc.
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

**Nota**: Este projeto foi desenvolvido como teste técnico e demonstra conhecimento em React, TypeScript, Micro-Frontends, Docker, testes unitários e E2E, e boas práticas de desenvolvimento.
