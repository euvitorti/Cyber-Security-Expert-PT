# Para superar um hacker, você deve pensar como um.

---

No módulo Offensive Security, aprendi que o principal objetivo da segurança ofensiva é identificar e explorar vulnerabilidades em sistemas, um campo essencial para profissionais de Pentesting. Como parte do treinamento na plataforma, foi proposta uma máquina virtual simulando um banco fake. O objetivo dessa atividade era buscar possíveis páginas ou diretórios não seguros dentro desse ambiente controlado, com o intuito de entender como um atacante poderia identificar e explorar essas falhas.

---

## O comando utilizado

Para realizar essa tarefa, utilizei o comando Gobuster no terminal. O Gobuster é uma ferramenta de força bruta usada para descobrir diretórios e arquivos ocultos em servidores web, ajudando a identificar possíveis vulnerabilidades. No contexto da atividade, a ideia era procurar por páginas do sistema que não estivessem protegidas adequadamente.

O comando utilizado foi o seguinte:

```
    gobuster -u http://url_aqui -w wordlist.txt dir
```

---

**Explicação do comando:**

1. gobuster: É a ferramenta que executa o processo de força bruta para buscar diretórios e arquivos em servidores web.

2. -u http://url_aqui: A opção -u define a URL alvo onde a busca será realizada. Neste caso, a URL do banco fake simulado pela plataforma foi fornecida como http://url_aqui.

3. -w wordlist.txt: A opção -w define o arquivo de wordlist (lista de palavras) que será utilizado pela ferramenta para realizar as tentativas de descoberta. A wordlist contém um conjunto de palavras e diretórios comuns que são testados para tentar identificar páginas ou diretórios disponíveis no servidor.

4. dir: Essa opção instrui o Gobuster a realizar a busca por diretórios, ou seja, ele tentará encontrar todos os diretórios disponíveis no servidor de acordo com a wordlist fornecida.

---

## Resultado da execução

Após executar o comando, o Gobuster procurou e encontrou diversos diretórios e páginas disponíveis no servidor. Entre os resultados, encontrei uma página de transferência e acessei-a. Por ser um sistema fake (proposto pela própria plataforma de treinamento), fiz uma transação simulada para uma conta fake.

# Importante

Vale ressaltar que toda essa atividade foi realizada dentro de um ambiente de treinamento seguro e controlado, onde o objetivo era aprender sobre segurança ofensiva e não foi realizada nenhuma ação em sistemas reais ou sem permissão. A plataforma forneceu um banco fake, onde os testes de segurança foram conduzidos de forma ética, sem afetar nenhum serviço real.