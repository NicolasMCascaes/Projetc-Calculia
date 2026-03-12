# 🧮 Calculia

Calculia é uma calculadora web inteligente que combina operações matemáticas com explicações didáticas geradas por Inteligência Artificial. A aplicação permite que estudantes realizem cálculos e recebam explicações detalhadas sobre as expressões matemáticas, como se tivessem um professor particular.

##  Funcionalidades

- **Calculadora completa**: operações básicas (+, -, ×, ÷), raiz quadrada (√), porcentagem (%), parênteses e decimais
- **Explicações com IA**: o botão "Explicar" envia a expressão matemática para uma IA que responde de forma didática e objetiva
- **Autenticação de usuários**: cadastro e login com autenticação JWT
- **Modo offline**: a calculadora pode ser usada sem login (apenas as explicações com IA requerem autenticação)
- **Design responsivo**: interface adaptada para desktop e dispositivos móveis

##  Estrutura do Projeto

O projeto está organizado em **frontend** e **backend**:

```
Projetc-Calculia/
├── frontend/                  # Interface do usuário (HTML, CSS, JS)
│   ├── index.html             # Página de login
│   ├── register.html          # Página de cadastro
│   ├── calculia.html          # Página principal da calculadora
│   ├── css/
│   │   ├── loginStyle.css     # Estilos da página de login
│   │   ├── registerStyle.css  # Estilos da página de cadastro
│   │   └── calculatorStyle.css # Estilos da calculadora
│   ├── js/
│   │   ├── login.js           # Lógica de autenticação (login)
│   │   ├── register.js        # Lógica de cadastro de usuário
│   │   ├── script.js          # Lógica da calculadora (operações)
│   │   └── calculia.js        # Integração com a IA (explicações)
│   └── assets/
│       ├── estudo.jpg         # Imagem de fundo (login/cadastro)
│       ├── profile-picture.png # Ícone de perfil
│       └── icons8-home-50.png # Ícone de home
│
├── backend/                   # API REST (Java Spring Boot)
│   ├── pom.xml                # Dependências Maven
│   └── src/
│       ├── main/
│       │   ├── java/com/project/calculia/
│       │   │   ├── CalculiaApplication.java   # Classe principal Spring Boot
│       │   │   ├── controllers/
│       │   │   │   ├── AuthController.java    # Endpoints de autenticação
│       │   │   │   ├── ChatController.java    # Endpoint da IA
│       │   │   │   └── CorsConfig.java        # Configuração de CORS
│       │   │   ├── dto/                       # Objetos de transferência de dados
│       │   │   ├── models/
│       │   │   │   └── Users.java             # Entidade de usuário (JPA)
│       │   │   ├── repository/
│       │   │   │   └── UsersRepository.java   # Repositório JPA
│       │   │   ├── security/
│       │   │   │   ├── JwtUtil.java           # Utilitário JWT
│       │   │   │   ├── JwtAuthFilter.java     # Filtro de autenticação
│       │   │   │   └── SecurityConfig.java    # Configuração Spring Security
│       │   │   └── services/
│       │   │       ├── UsersService.java       # Serviço de usuários
│       │   │       └── UsuarioDetailsService.java # UserDetailsService
│       │   └── resources/
│       │       ├── application.properties     # Configurações do banco e IA
│       │       └── application.yaml           # Configurações do modelo de IA
│       └── test/                              # Testes unitários
│
└── api/
    └── proxy.js               # Proxy serverless (Vercel) para o backend
```

## 🛠️ Tecnologias

### Frontend
| Tecnologia | Descrição |
|------------|-----------|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript | Lógica da calculadora e integração com a API |

### Backend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Java | 21 | Linguagem principal |
| Spring Boot | 3.5.5 | Framework web |
| Spring Security | - | Autenticação e autorização |
| Spring Data JPA | - | Acesso ao banco de dados |
| PostgreSQL | - | Banco de dados relacional |
| JJWT | 0.11.5 | Geração e validação de tokens JWT |
| Spring AI (Ollama) | 1.0.0 | Integração com modelo de IA local |

### IA
| Componente | Descrição |
|------------|-----------|
| Ollama | Servidor local de modelos de IA |
| Gemma3 (4B) | Modelo de linguagem para explicações matemáticas |

##  Como Executar

### Pré-requisitos

- **Java 21** (JDK)
- **Maven** (ou use o wrapper `mvnw` incluído)
- **PostgreSQL** instalado e rodando
- **Ollama** instalado com o modelo `gemma3:4b`

### 1. Configurar o Banco de Dados

Crie um banco de dados PostgreSQL e atualize as configurações em `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

### 2. Configurar a IA (Ollama)

Instale o [Ollama](https://ollama.ai) e baixe o modelo:

```bash
ollama pull gemma3:4b
```

### 3. Iniciar o Backend

```bash
cd backend
./mvnw spring-boot:run
```

O servidor será iniciado em `http://localhost:8080`.

### 4. Abrir o Frontend

Abra o arquivo `frontend/index.html` diretamente no navegador, ou use um servidor local:

```bash
cd frontend
npx serve .
```

## 📡 Endpoints da API

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/auth/register` | Cadastro de novo usuário |
| `POST` | `/auth/login` | Login (retorna token JWT) |

### IA

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| `POST` | `/ai/prompt` | Envia expressão para explicação da IA | Token JWT obrigatório |

## 📝 Licença

Este projeto é de uso educacional.
