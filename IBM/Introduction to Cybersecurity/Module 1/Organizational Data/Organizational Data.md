# Segurança da Informação e o Modelo de McCumber

A segurança da informação é essencial para proteger os dados de uma organização contra acessos não autorizados, modificações indevidas e indisponibilidade. Antes de implementar medidas de segurança, é importante entender os **tipos de dados** que precisam ser protegidos e os **riscos** envolvidos.

---

## Tipos de Dados em uma Organização

As empresas lidam com diferentes tipos de dados, sendo os principais:

### 1. Dados Tradicionais
São informações comuns a todas as empresas e incluem:
- **Dados Transacionais**: Registros de compras, vendas, produção e decisões internas, como contratações.
- **Propriedade Intelectual**: Patentes, marcas registradas e planos estratégicos, que garantem vantagem competitiva.
- **Dados Financeiros**: Relatórios contábeis, como balanços e fluxo de caixa, que mostram a saúde da empresa.

### 2. Internet das Coisas (IoT) e Big Data
O crescimento da conectividade entre dispositivos criou um enorme volume de dados gerados por sensores, softwares e equipamentos conectados à internet. Esse fenômeno é chamado de **Big Data**, exigindo novas formas de armazenamento e segurança.

---

## O Modelo de McCumber

Para ajudar na proteção dessas informações, o especialista **John McCumber** criou, em 1991, um modelo chamado **Cubo de McCumber**. Ele é composto por **três dimensões**, que garantem uma visão completa da segurança da informação.

### 1. Princípios Fundamentais da Segurança da Informação
O modelo define três princípios básicos:

- **Confidencialidade**: Garante que apenas pessoas autorizadas tenham acesso a informações sensíveis.  
  *Exemplo*: Uso de criptografia e autenticação em dois fatores.
  
- **Integridade**: Protege os dados contra modificações não autorizadas, acidentais ou maliciosas.  
  *Exemplo*: Uso de **checksums** (explicado abaixo) para verificar se um arquivo foi alterado.

- **Disponibilidade**: Assegura que os sistemas estejam acessíveis para os usuários autorizados quando necessário.  
  *Exemplo*: Backups regulares e manutenção de servidores.

### 2. Estados dos Dados
Os dados podem estar em três estados diferentes:

- **Processamento (Data in Process)**: Quando estão sendo usados em operações, como ao editar um documento ou atualizar um banco de dados.
- **Armazenamento (Data at Rest)**: Quando estão guardados em um HD, SSD ou pen drive.
- **Transmissão (Data in Transit)**: Quando estão sendo enviados entre dispositivos, como no envio de um e-mail.

### 3. Medidas de Segurança
As organizações podem adotar diferentes abordagens para proteger seus dados:

- **Conscientização, Treinamento e Educação**: Ensinar os funcionários sobre ameaças e boas práticas de segurança.
- **Tecnologia**: Uso de ferramentas como firewalls e antivírus para proteção automatizada.
- **Política e Procedimentos**: Regras internas para lidar com incidentes de segurança.

---

## O que são Checksums?

Um **checksum** é um valor gerado a partir de um arquivo ou conjunto de dados para verificar sua integridade. Se um arquivo for modificado, seu checksum muda, permitindo detectar alterações indesejadas.

### Exemplo de Checksum:

Vamos supor que temos um arquivo chamado `documento.txt`. Para calcular seu checksum, podemos usar o algoritmo **SHA-256**:

1. **No Linux:**

    - Abra o terminal.
    - Navegue até a pasta onde está o arquivo (se necessário):
   
    ```bash
        cd /caminho/para/o/arquivo
    ```

    - Execute o comando:
    
    ```bash
        sha256sum nome_do_arquivo
    ```

2. **No Windows**:

    - Abra o PowerShell.
    - Navegue até a pasta onde está o arquivo:
    
    ```bash
        cd C:\caminho\para\o\arquivo
    ```

    - Execute o comando:
    
    ```
        Get-FileHash nome_do_arquivo -Algorithm SHA256
    ```

Isso vai gerar um código como:

```
    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

**Como testar uma mudança no arquivo**

- Calcule o checksum original do arquivo com os comandos acima.
- Modifique o arquivo (adicione um espaço, uma linha ou mude um caractere).
- Recalcule o checksum com o mesmo comando.

- **Compare os valores:**

    - Se forem iguais, o arquivo não foi alterado.
    - Se forem diferentes, o arquivo foi modificado.

Se alguém modificar o arquivo, seu checksum será diferente, indicando que o conteúdo foi alterado.

---

## Conclusão

A segurança da informação é fundamental para qualquer organização e envolve a proteção de diferentes tipos de dados. O Modelo de McCumber ajuda a estruturar essa proteção com três dimensões principais: princípios de segurança, estados dos dados e medidas de segurança.

Além disso, ferramentas como checksums são úteis para garantir a integridade dos dados, ajudando a detectar qualquer modificação não autorizada.

Ao seguir esses conceitos e boas práticas, empresas podem reduzir riscos e garantir a proteção de suas informações.