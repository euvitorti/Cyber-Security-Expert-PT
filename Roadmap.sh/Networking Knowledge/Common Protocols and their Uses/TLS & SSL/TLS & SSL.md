# TLS e SSL

## O que são

- **SSL (Secure Sockets Layer)**: Protocolo criado para fornecer comunicação segura entre dois sistemas (ex: navegador e servidor).
- **TLS (Transport Layer Security)**: Evolução do SSL. É mais seguro e eficiente. Atualmente, o TLS substituiu o SSL.

## Para que servem

- Criptografar dados transmitidos pela internet.
- Garantir **segurança**, **privacidade** e **integridade** da comunicação.
- Proteger contra ataques como **interceptação** e **modificação de dados**.

## Por que usar

- **Confidencialidade**: impede que terceiros leiam os dados transmitidos.
- **Autenticação**: garante que você está se conectando ao servidor correto (via certificados).
- **Integridade**: assegura que os dados não foram alterados durante a transmissão.
- **Conformidade**: muitas normas e leis exigem o uso de conexões seguras (ex: LGPD, GDPR, PCI-DSS).

## Diferenças entre SSL e TLS

| Característica       | SSL                | TLS                  |
|----------------------|--------------------|----------------------|
| Status               | Obsoleto           | Ativo                |
| Segurança            | Menor              | Maior                |
| Versão mais usada    | SSL 3.0 (inseguro) | TLS 1.2 / 1.3        |

## Como funciona (resumo)

1. Cliente se conecta ao servidor via HTTPS.
2. O servidor envia seu **certificado digital** (com chave pública).
3. O cliente valida o certificado.
4. Cliente e servidor negociam uma **chave de sessão**.
5. Todos os dados passam a ser criptografados com essa chave.

## Conclusão

O TLS (sucessor do SSL) é essencial para proteger a comunicação na internet. Ele garante que os dados trocados entre cliente e servidor sejam privados, íntegros e autênticos. Usar TLS é uma prática fundamental em qualquer aplicação web moderna que lide com dados sensíveis.

---

### Aprenda
- [O que é o TLS (Transport Layer Security)?](https://www.cloudflare.com/pt-br/learning/ssl/transport-layer-security-tls/)
- [O que é SSL? | Definição de SSL](https://www.cloudflare.com/pt-br/learning/ssl/what-is-ssl/)