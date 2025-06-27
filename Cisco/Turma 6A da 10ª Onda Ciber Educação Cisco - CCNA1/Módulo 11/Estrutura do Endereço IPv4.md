# Entendendo Endereçamento IPv4, Máscaras de Sub-rede e Subnetting

## Visão Geral

O IPv4 é um protocolo de 32 bits que identifica dispositivos em uma rede. Cada endereço IP é dividido em duas partes:

* **Parte da Rede**: Identifica a rede específica.
* **Parte do Host**: Identifica o dispositivo dentro dessa rede.

A separação entre essas partes é determinada pela **máscara de sub-rede**.

## Máscara de Sub-rede

A máscara de sub-rede é um número de 32 bits que define quais bits do endereço IP pertencem à rede e quais ao host. Ela é composta por uma sequência de bits 1 (para a rede) seguida por bits 0 (para o host).

**Exemplo:**

* Endereço IP: `192.168.10.10`
* Máscara de Sub-rede: `255.255.255.0` (em binário: `11111111.11111111.11111111.00000000`)

Neste exemplo, os primeiros 24 bits (os três primeiros octetos) representam a parte da rede, e os últimos 8 bits representam a parte do host.

## Notação CIDR (Classless Inter-Domain Routing)

A notação CIDR é uma forma compacta de representar a máscara de sub-rede. Ela utiliza uma barra (/) seguida pelo número de bits que representam a parte da rede.

**Exemplo:**

* `192.168.10.10/24` indica que os primeiros 24 bits são para a rede.

## 🔍 Determinando o Endereço de Rede com Operação AND

Para identificar o endereço de rede de um host, realiza-se uma operação lógica AND entre o endereço IP e a máscara de sub-rede.

**Exemplo:**

* Endereço IP: `192.168.10.10` (em binário: `11000000.10101000.00001010.00001010`)
* Máscara de Sub-rede: `255.255.255.0` (em binário: `11111111.11111111.11111111.00000000`)
* Resultado da operação AND: `11000000.10101000.00001010.00000000`
* Endereço de Rede: `192.168.10.0`

## Tipos de Endereços em uma Rede

1. **Endereço de Rede**: Identifica a própria rede.

   * Exemplo: `192.168.10.0`
2. **Endereços de Host**: Atribuídos a dispositivos individuais na rede.

   * Varia de `192.168.10.1` a `192.168.10.254`
3. **Endereço de Broadcast**: Usado para enviar mensagens a todos os dispositivos na rede.

   * Exemplo: `192.168.10.255`

*Nota:* O primeiro endereço (`192.168.10.0`) é reservado para identificar a rede, e o último (`192.168.10.255`) é reservado para broadcast. Portanto, os endereços de host válidos vão de `192.168.10.1` a `192.168.10.254`.

## Conclusão

Compreender como os endereços IP e as máscaras de sub-rede funcionam é essencial para o design e a manutenção eficientes de redes. A máscara de sub-rede permite determinar a parte da rede e a parte do host de um endereço IP, facilitando a organização e a comunicação dentro da rede.

### Para aprofundar seus conhecimentos

- [TCP/IP addressing and subnetting - Windows Client | Microsoft Learn](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)

- [subnet mask explained in simple terms | CCNA 200-301 | - YouTube](https://m.youtube.com/watch?t=3s&v=eHV1aOnu7oM)