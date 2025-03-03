# Análise de Conectividade e Monitoramento de Pacotes (Comunicação Sem Criptografia)

Neste projeto, configurei uma rede entre meu sistema hospedeiro (Windows, Mac ou outro) e uma máquina virtual (Kali Linux) para analisar o tráfego de rede sem criptografia. O objetivo é entender como os dados trafegam entre as máquinas, visualizar os pacotes "a nu" com o Wireshark e preparar o ambiente para, em um próximo passo, implementar a criptografia na comunicação.

## Configuração da Rede

Utilizei o VirtualBox para criar uma rede entre o sistema hospedeiro e o Kali Linux. Para isso, configurei a VM com a opção Host-Only Adapter, criando uma rede local isolada que permite a comunicação entre as máquinas sem passar pelo roteador físico ou internet.

## Como Obter Meu Endereço IP

Antes de configurar a rede, é importante que eu saiba qual o IP do meu sistema. Veja como encontrar o endereço IP em diferentes sistemas operacionais:

### No Windows

1. Abra o **Prompt de Comando** e digite o comando:
```
   ipconfig
```

Procure pela interface de rede ativa (por exemplo, "Adaptador de Rede VirtualBox Host-Only" ou "Ethernet"). O endereço IPv4 exibido (por exemplo, 192.168.56.1) é o IP do meu sistema.

### No Kali Linux

1. Abra o **terminal** e digite um dos comandos:

```
    ip a
```
```
    ifconfig
```

Identifique a interface de rede correta (geralmente eth0, enp0s3 ou similar) e anote o endereço IP atribuído.

### No Mac OS

1. Abra o **terminal** e digite o comando:

```
    ifconfig
```

Procure pela interface de rede (normalmente en0 para Ethernet ou en1 para Wi-Fi) e localize o endereço IPv4.

---

## Teste de Conectividade

Após configurar a rede e analisar o endereço ip de cada máquina, realizei testes para confirmar que as máquinas estão se comunicando corretamente:

1. Ping:

- **No Windows (ou Mac), execute:**

```
    ping [IP do Kali]
```

- **No Kali Linux, execute:**

```
    ping [IP do Hospedeiro]
```
Se os pacotes responderem, significa que a conexão está funcionando.

2. Traceroute:

- **No Windows:**

```
    tracert [IP do Kali]
```

- **No Kali Linux:**

```
    traceroute [IP do Hospedeiro]
```

Esse comando mostra o caminho percorrido pelos pacotes, confirmando que as máquinas estão na mesma rede ou no caminho correto.

---

## Monitoramento com Wireshark

Para analisar o tráfego de rede sem criptografia, utilizei o Wireshark no Kali Linux.

### Passos para Captura e Análise:

1. Abrir o Wireshark: Iniciei o Wireshark no Kali Linux.
2. Selecionar a Interface de Rede: Escolhi a interface (por exemplo, eth0 ou enp0s3) que está conectada à rede configurada no VirtualBox.
3. Iniciar a Captura: Cliquei em "Start" para começar a captura dos pacotes.
4. Gerar Tráfego: No Windows (ou Mac), executei comandos como ping ou traceroute para gerar tráfego de rede entre o hospedeiro e o Kali.
5. Aplicar Filtros: Usei filtros para facilitar a análise, por exemplo:
    - **Para visualizar pacotes ICMP:**
    ```
        icmp
    ```
    - **Para filtrar tráfego entre os IPs específicos:**
    ```
        ip.addr == [IP Hospedeiro] || ip.addr == [IP Kali]
    ```
    - **Para ver tráfego HTTP (se houver):**
    ```
        tcp.port == 80
    ```
6. Analisar os Pacotes: Examinei os detalhes dos pacotes (endereços IP de origem/destino, tipo de protocolo, tempo de resposta etc.) para confirmar que os dados estão sendo transmitidos sem criptografia.

## Conclusão

Nesta fase, o foco foi analisar a comunicação de rede sem criptografia e demonstrar como o tráfego pode ser capturado e visualizado com o Wireshark. Essa análise revela a transparência dos dados transmitidos, evidenciando riscos de segurança na ausência de proteção.