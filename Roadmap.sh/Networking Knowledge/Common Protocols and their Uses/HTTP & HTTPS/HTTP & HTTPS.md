# Entendendo HTTP/HTTPS

HTTP, ou **Hypertext Transfer Protocol**, é o protocolo que serve de base para a navegação na internet. Sempre que você acessa um site, assiste um vídeo ou preenche um formulário online, há uma comunicação acontecendo entre o seu navegador (cliente) e um servidor. Essa conversa acontece por meio do HTTP.

---

## O que é HTTP?

HTTP é um protocolo de **camada de aplicação**, ou seja, ele é usado para permitir que dispositivos em uma rede troquem informações. Ele funciona por cima de outras camadas do modelo de rede, como a de transporte (geralmente TCP). Cada vez que você acessa uma página, seu navegador **envia uma requisição HTTP** ao servidor. O servidor responde com uma **resposta HTTP** que contém os dados solicitados.

---

## Como funciona uma requisição HTTP?

Imagine que você entrou no navegador e digitou `www.exemplo.com`. Quando você aperta Enter, o navegador monta e envia uma requisição HTTP.

### Uma requisição HTTP contém:

- **Versão do HTTP** (ex: HTTP/1.1)
- **URL** (endereço do recurso solicitado)
- **Método HTTP** (GET, POST, etc)
- **Cabeçalhos (Headers)** (informações como tipo do navegador, tipo de dado aceito)
- *Corpo da requisição (Body)* (opcional - usado em métodos como POST)

---

## Exemplo de requisição HTTP (GET):

```
    GET /pagina.html HTTP/1.1
    Host: www.exemplo.com User-Agent: Mozilla/5.0
    Accept: text/html
```


Esse exemplo mostra uma requisição pedindo o conteúdo da página `pagina.html`.

---

## Métodos HTTP

Os métodos HTTP, também chamados de *verbos HTTP*, indicam o que queremos fazer com o recurso solicitado. Veja alguns exemplos:

- **GET** – solicita dados. Ex: abrir uma página.
- **POST** – envia dados para o servidor. Ex: enviar formulário de login.
- **PUT** – atualiza um recurso existente.
- **DELETE** – remove um recurso.

### Exemplo com POST:

```
POST /login HTTP/1.1
Host: www.exemplo.com
Content-Type: application/x-www-form-urlencoded
usuario=vitor&senha=12345
```

---

## O que são Headers HTTP?

**Headers** são informações adicionais enviadas junto com as requisições e respostas. Eles funcionam como rótulos que ajudam o navegador e o servidor a entender melhor os dados sendo trocados.

### Exemplo de Headers de requisição:

```
    User-Agent: Mozilla/5.0 Accept: text/html
```

---

## E o corpo da requisição?

O corpo (body) é onde ficam os dados enviados pelo cliente, geralmente em requisições **POST** ou **PUT**.

Exemplo: envio de um formulário de login. Os campos `usuario` e `senha` vão no body da requisição.

---

## E a resposta HTTP?

Depois de uma requisição, o servidor responde com uma **resposta HTTP**. Essa resposta inclui:

- **Código de status HTTP**
- **Headers de resposta**
- **Corpo da resposta** (conteúdo da página, por exemplo)

---

## Códigos de status HTTP

Esses códigos indicam o resultado da requisição:

- **1xx** – Informacional
- **2xx** – Sucesso (ex: `200 OK`)
- **3xx** – Redirecionamento
- **4xx** – Erro do cliente (ex: `404 Not Found`)
- **5xx** – Erro do servidor (ex: `500 Internal Server Error`)

### Exemplos:

- `200 OK` – Sucesso!
- `404 Not Found` – Página não encontrada
- `500 Internal Server Error` – Erro no servidor

> [HTTP Cats](https://http.cat/)

---

## Headers de resposta

Funcionam de maneira similar aos headers da requisição. Eles informam ao cliente como interpretar os dados recebidos.

### Exemplo:

```
    Content-Type: text/html Content-Length: 1204
```


---

## Corpo da resposta

Quando você acessa uma página, o conteúdo (HTML, CSS, imagens) vem dentro do **corpo da resposta**. O navegador interpreta esse conteúdo e exibe a página.

---

## HTTP e ataques DDoS

Por ser um protocolo **stateless** (sem memória entre requisições), cada requisição é independente. Isso pode ser explorado em ataques DDoS, onde milhares de requisições são enviadas para sobrecarregar um servidor. Esses ataques são chamados de **ataques na camada 7 (aplicação)**.

---

## Entendendo HTTPS

HTTPS significa Hypertext Transfer Protocol Secure. Trata-se de uma versão segura do HTTP, que garante a privacidade e a integridade dos dados trocados entre o cliente e o servidor.

---

## Como o HTTPS Funciona?

Ao contrário do HTTP, que envia os dados em texto puro, o HTTPS utiliza protocolos de criptografia, o TLS (Transport Layer Security), que sucedeu o SSL, para cifrar as informações. Esse processo envolve algumas etapas fundamentais:

- **Estabelecimento da Conexão Segura (TLS Handshake):** Quando você acessa um site via HTTPS, seu navegador inicia um “aperto de mão” (handshake) com o servidor. Durante essa troca, o servidor envia um certificado digital, que contém sua chave pública e informações de identificação. O navegador então verifica a autenticidade desse certificado para garantir que a conexão é segura.

- **Criptografia dos Dados:** Após a validação do certificado, o navegador e o servidor negociam os parâmetros de criptografia. Dessa forma, todas as informações transmitidas – como dados de formulários, informações de login ou transações financeiras – são criptografadas. Isso impede que terceiros interceptem ou alterem os dados durante a transmissão.

- **Integridade e Autenticidade:** Além de manter os dados confidenciais, o HTTPS assegura que as informações não serão modificadas ou corrompidas durante o trânsito. A autenticação mútua entre cliente e servidor contribui para a confiança na identidade dos envolvidos na comunicação.

---

## Por Que Usar HTTPS?

- **Segurança:** Criptografa a conexão e protege dados sensíveis contra ataques de interceptação e fraude.

- **Confiança:** A presença do cadeado na barra de endereço do navegador indica aos usuários que o site é seguro, aumentando a credibilidade do serviço ou aplicação.

- **Integridade dos Dados:** Garante que os dados enviados e recebidos não foram alterados durante a transmissão.

- **SEO e Regulamentações:** Motores de busca frequentemente dão preferência a sites seguros, e muitos padrões de conformidade e privacidade exigem o uso de HTTPS.

---

## Conclusão

HTTP é como uma linguagem entre navegador e servidor. Ele define como os dados são pedidos e entregues. Saber como ele funciona é essencial para qualquer pessoa que deseja entender ou trabalhar com aplicações web. HTTPS é uma camada de segurança sobre o HTTP que utiliza criptografia para proteger a comunicação na internet. Com o uso de certificados digitais e criptografia baseada em TLS, o HTTPS se tornou fundamental para a proteção de dados e a manutenção da confidencialidade, integridade e autenticidade das informações trocadas online.

---

## Aprenda mais

- [What is HTTP?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/#:~:text=The%20Hypertext%20Transfer%20Protocol%20(HTTP,of%20the%20network%20protocol%20stack.))
- [O que significa HTTP?](https://www.alura.com.br/artigos/http?utm_term=&utm_campaign=%5BAO%5D+%5BPerformance+Max%5D+%5BVenda%5D&utm_source=google&utm_medium=cpc&campaign_id=22048829191__&utm_id=22048829191__&hsa_acc=7964138385&hsa_cam=%5BAO%5D+%5BPerformance+Max%5D+%5BVenda%5D&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=google&hsa_ver=3&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BN3t83-wEVfWvpJiT-1tdv_Pd_umBkjimbMop53JlE1No_T_KscQmRoCxTgQAvD_BwE)
- [O que é HTTPS?](https://www.cloudflare.com/pt-br/learning/ssl/what-is-https/)
- [Por que usar HTTPS?](https://www.cloudflare.com/pt-br/learning/ssl/why-use-https/)