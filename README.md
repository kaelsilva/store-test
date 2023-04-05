# Store Test

Acesse a aplicação através do link https://store-test-frontend.onrender.com/.
A documentação da API está disponível em https://store-test-dn63.onrender.com/api-docs/.

## Instruções

### 1 - Instalação de pacotes
Execute entre na pasta `backend` e `frontend` e execute `npm install` em ambas.

### 2 - Configuração de ambiente
A versão do Node utilizada foi a 14.19.1.  
Deve ser criado um arquivo `.env` na pasta `backend` e outro na pasta `frontend`, ambos conforme os arquivos `.env.example` em suas respectivas pastas.  
A versão do MongoDB utilizado foi a 6.0.

#### 2.1 - Exemplo de arquivo .env na pasta "backend"
`PORT=3001`  
`DB_USER=kael`  
`DB_PASSWORD=kael123`  
`DB_HOST=127.0.0.1`  
`DB_PORT=27017`

#### 2.2 - Exemplo de arquivo .env na pasta "frontend"
`VITE_BACKEND_HOST=http://localhost:3001`

### 3 - Testes
Entre na pasta `backend` e execute `npm run test`.

### 4 - Documentação da API
Na nuvem, acesse a documentaçãod da API através do link https://store-test-dn63.onrender.com/api-docs/.  
Localmente, acesse a documentação através do link http://localhost:3001 ou similar, de acordo com a variável `PORT` definida no `.env` do backend.