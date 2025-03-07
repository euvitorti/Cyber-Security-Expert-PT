# O que é LAN?

**LAN** é a sigla para **Local Area Network**, que em português significa **Rede Local**. Trata-se de uma rede que conecta dispositivos em uma área geográfica limitada, como uma residência, escritório ou campus universitário.

## Características Principais

- **Escopo Limitado:**  
  Geralmente cobre uma área pequena, permitindo a conexão de diversos dispositivos próximos fisicamente.

- **Alta Velocidade:**  
  Devido às curtas distâncias, as taxas de transferência são altas e a latência é baixa.

- **Gerenciamento Local:**  
  A administração da rede pode ser feita de forma centralizada, facilitando o controle e a manutenção.

- **Compartilhamento de Recursos:**  
  Permite que dispositivos compartilhem impressoras, arquivos, acesso à internet e outros recursos.

## Exemplos de Aplicação

- **Redes Domésticas:**  
  Conexão de computadores, smartphones, smart TVs e outros dispositivos dentro de uma casa.

- **Redes Empresariais:**  
  Conexão de estações de trabalho, servidores e dispositivos em um ambiente corporativo.

- **Ambientes Educacionais:**  
  Redes utilizadas em escolas e universidades para facilitar a comunicação e o compartilhamento de dados.

## LAN x WAN

- **LAN (Rede Local):**  
  - Cobre uma área geográfica limitada.  
  - Alta velocidade e baixa latência.  
  - Geralmente administrada de forma local.

- **WAN (Wide Area Network):**  
  - Cobre grandes áreas geográficas, como cidades, países ou continentes.  
  - Velocidades podem ser menores e a latência maior.  
  - Geralmente composta por múltiplas LANs interconectadas.

## Exemplo Prático: Configurando e Testando uma LAN Virtual

Neste exemplo, utilizamos um ambiente com:

- **Hospedeiro:** Windows 10  
- **Máquina Virtual:** Kali Linux rodando no VirtualBox  
- **Configurações de Rede:**  
  - Adaptador 1 configurado como **Rede Somente para Host** (para comunicação direta entre Windows e Kali)
  - Adaptador 2 configurado como **NAT** (para acesso à internet)  

### 1. Configurando o VirtualBox

1. **Abra o VirtualBox** e selecione sua máquina virtual, (escolha um sistema), estou usando neste exemplo o Kali Linux.
2. Clique em **Configurações** e vá para a aba **Rede**.
3. No **Adaptador 1**,  ative a opção e selecione **Rede Somente para Host** para criar uma LAN virtual isolada.
4. No **Adaptador 2**,  certifique-se de que está selecionado **NAT** para permitir acesso à internet.

### 2. Verificando as Configurações de IP

- **No Windows (Hospedeiro):**  
  Abra o Prompt de Comando e execute:
```
  ipconfig
```
Verifique que a interface associada à rede "Host-Only" possui um IP (ex.: 192.168.56.1).

- **No Kali Linux (Máquina Virtual):**
Abra um terminal e execute:
```
    ip addr
```
Confirme que a interface da rede "Host-Only" possui um IP na mesma faixa (ex.: 192.168.56.101).

---

### 3. Testando a Conexão com Ping
1. **Do Windows para o Kali:**
No Prompt de Comando do Windows, execute:
```
    ping 192.168.56.101
```
Você deve ver respostas indicando que os pacotes foram enviados e recebidos com sucesso.

2. **Do Kali para o Windows:**
No terminal do Kali, execute:
```
    ping 192.168.56.1
```
Confirme que o Windows responde aos pings.

### 4. Levantando um Servidor HTTP no Kali
1. No Kali Linux, abra um terminal e execute:

```
    python3 -m http.server 8080
```

Isso iniciará um servidor HTTP simples na porta 8080.

2. Testando o Servidor:
No Windows, abra um navegador e acesse:
```
    http://192.168.56.101:8080
```

O servidor no Kali deverá responder, exibindo uma listagem do diretório.
Nos logs do terminal do Kali, você verá informações como o endereço IP do cliente (Windows), o horário do acesso e o método HTTP (GET) usado na requisição.

### 5. Analisando Logs e Explorando Mais
1. Análise de Logs:
Observe os logs do servidor HTTP no terminal do Kali para entender os detalhes de cada requisição (IP, data, método, etc.).

2. Explorando com Nmap:
No Kali, você pode escanear a rede para identificar os hosts conectados:
```
    sudo nmap -sP 192.168.56.0/24
```
Isso listará todos os dispositivos ativos na LAN virtual.

## Conclusão
Esta prática demonstra de forma simples e direta como configurar uma LAN virtual utilizando Kali Linux e Windows, possibilitando a:

- Compreensão dos conceitos teóricos de redes locais.
- Configuração de um ambiente de teste isolado e controlado.
- Análise prática da comunicação entre dispositivos por meio de pings, execução de servidores HTTP e monitoramento de logs e tráfego.
- Ao testar esses conceitos na prática, você constrói uma base sólida para aprofundar seus estudos em redes e cibersegurança, integrando ferramentas como Nmap, Wireshark, e outras em seus futuros projetos.

Este arquivo foi criado para auxiliar no entendimento teórico e prático sobre LANs, além de servir como documentação para estudos em redes e cibersegurança.