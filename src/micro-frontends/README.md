# Arquitetura de Micro-Frontends

## 🏗️ Estrutura Proposta

```
src/
├── micro-frontends/
│   ├── auth/                    # Micro-frontend de Autenticação
│   │   ├── components/
│   │   │   └── Login/
│   │   ├── services/
│   │   ├── interfaces/
│   │   └── index.ts
│   ├── clients/                 # Micro-frontend de Clientes
│   │   ├── components/
│   │   │   ├── ClientList/
│   │   │   ├── ClientForm/
│   │   │   └── ClientCard/
│   │   ├── services/
│   │   ├── interfaces/
│   │   └── index.ts
│   └── shared/                  # Biblioteca Compartilhada
│       ├── components/
│       │   ├── Button/
│       │   ├── Input/
│       │   └── Modal/
│       ├── styles/
│       ├── utils/
│       └── index.ts
├── shell/                       # Aplicação Shell
│   ├── components/
│   ├── routing/
│   └── App.tsx
└── main.tsx
```

## 🎯 Benefícios da Arquitetura

### **1. Autonomia das Equipes**

- Cada micro-frontend pode ser desenvolvido independentemente
- Tecnologias diferentes por equipe (React, Vue, Angular)
- Deploy independente

### **2. Escalabilidade**

- Equipes podem trabalhar em paralelo
- Código mais organizado e manutenível
- Reutilização de componentes

### **3. Isolamento**

- Falhas isoladas por micro-frontend
- Performance independente
- Testes isolados

## 🛠️ Implementação

### **Opção 1: Module Federation (Vite)**

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        auth: "http://localhost:3001/assets/remoteEntry.js",
        clients: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
```

### **Opção 2: Web Components**

```typescript
// shared/components/Button.tsx
export class CustomButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>${this.getAttribute("text")}</button>`;
  }
}

customElements.define("custom-button", CustomButton);
```

### **Opção 3: Iframe (Simples)**

```typescript
// shell/components/MicroFrontend.tsx
interface MicroFrontendProps {
  src: string;
  name: string;
}

export function MicroFrontend({ src, name }: MicroFrontendProps) {
  return (
    <iframe
      src={src}
      title={name}
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  );
}
```

## 📦 Estrutura de Deploy

```
├── auth-app/          # Deploy independente
├── clients-app/       # Deploy independente
├── shared-lib/        # NPM Package
└── shell-app/         # Aplicação principal
```

## 🔄 Comunicação entre Micro-Frontends

### **1. Event Bus**

```typescript
// shared/utils/eventBus.ts
class EventBus {
  private listeners: Record<string, Function[]> = {};

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
  }
}

export const eventBus = new EventBus();
```

### **2. Shared State**

```typescript
// shared/state/globalStore.ts
export class GlobalStore {
  private state: any = {};
  private subscribers: Function[] = [];

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  getState() {
    return this.state;
  }

  subscribe(callback: Function) {
    this.subscribers.push(callback);
  }

  private notify() {
    this.subscribers.forEach((callback) => callback(this.state));
  }
}

export const globalStore = new GlobalStore();
```

## 🎨 Design System Compartilhado

```typescript
// shared/components/Button/Button.tsx
export interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, size, children, onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

## 🚀 Próximos Passos

1. **Refatorar estrutura atual** para micro-frontends
2. **Implementar Module Federation** com Vite
3. **Criar design system** compartilhado
4. **Configurar deploy** independente
5. **Implementar comunicação** entre apps

## 📋 Checklist de Implementação

- [ ] Separar componentes por domínio
- [ ] Criar biblioteca compartilhada
- [ ] Configurar Module Federation
- [ ] Implementar roteamento federado
- [ ] Configurar build e deploy
- [ ] Implementar testes isolados
- [ ] Documentar APIs compartilhadas
