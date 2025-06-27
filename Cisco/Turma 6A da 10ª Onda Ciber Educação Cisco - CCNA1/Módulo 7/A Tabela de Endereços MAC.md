# Endereço MAC e Hexadecimal

A comunicação em redes de computadores envolve diferentes formas de endereçamento para identificar dispositivos e garantir a entrega correta de informações. Um dos principais endereços utilizados é o **endereço MAC** (Media Access Control), que opera na **Camada 2 do modelo OSI** e é essencial para o funcionamento de redes locais (LANs). Além disso, o uso do **sistema hexadecimal** facilita a representação de dados binários de forma mais compacta e compreensível. Este texto analisa esses dois conceitos, explicando sua importância, funcionamento e inter-relação.

---

## Sistema Hexadecimal e Representação de Dados

O sistema **hexadecimal** é uma base numérica que utiliza 16 símbolos: de **0 a 9** e de **A a F** (equivalentes decimais de 10 a 15). Essa base é frequentemente usada em redes por sua capacidade de representar dados binários de maneira mais concisa.

- Cada **dígito hexadecimal representa 4 bits**. Assim, 8 bits (1 byte) podem ser expressos com apenas 2 dígitos hexadecimais.
- Por exemplo, o binário `0000 1010` equivale ao hexadecimal `0A`.

Essa representação é especialmente útil em endereços como o **MAC**, pois um endereço de 48 bits (6 bytes) pode ser compactado em apenas 12 dígitos hexadecimais.

- O intervalo binário de `00000000` a `11111111` corresponde ao intervalo hexadecimal de `00` a `FF`.
- Notações comuns para hexadecimal: `0x73`, `73H`, ou subscript `16`.

Quando necessário, conversões entre decimal, binário e hexadecimal podem ser feitas, normalmente passando primeiro pelo formato binário como intermediário.

---

## Endereço MAC: Identificação Física na Rede

O **endereço MAC** é um número exclusivo atribuído à interface de rede de um dispositivo. Ele é:

- Representado com **12 dígitos hexadecimais** (48 bits).
- Codificado diretamente na **ROM da NIC** (placa de interface de rede), sendo conhecido como **Burned-In Address (BIA)**.
- Usado para comunicação dentro de **redes locais** (LANs), garantindo a identificação precisa de origem e destino.

### Estrutura do Endereço MAC

Um endereço MAC é dividido em duas partes:

1. **OUI (Organizationally Unique Identifier)** – primeiros 6 dígitos, atribuídos pelo **IEEE** ao fabricante.
2. **Identificador exclusivo do dispositivo** – últimos 6 dígitos, definidos pelo próprio fabricante.

*Exemplo:*  
Se o OUI da Cisco for `00-60-2F` e o identificador do dispositivo for `3A-07-BC`, o endereço MAC completo será:  
**`00-60-2F-3A-07-BC`**

A responsabilidade de evitar duplicidade de endereços MAC é do fabricante. Porém, duplicatas podem surgir por falhas ou modificações manuais, especialmente em ambientes virtualizados.

---

## Tipos de Comunicação via MAC

Na Ethernet, o endereço MAC é utilizado para três tipos principais de comunicação:

### 1. *Unicast*

- Comunicação direta de **um emissor para um único receptor**.
- Utiliza o endereço MAC exclusivo do dispositivo de destino.

### 2. *Broadcast*

- Mensagem enviada para **todos os dispositivos** da rede local.
- Usa o endereço especial **`FF-FF-FF-FF-FF-FF`**.
- Enviada a **todas as portas do switch**, exceto a que originou o quadro.
- Não é roteada para outras redes.

### 3. *Multicast*

- Comunicação entre **um emissor e múltiplos receptores específicos**.
- Dispositivos interessados devem **fazer parte do grupo multicast**.
- Endereços multicast comuns:
  - IPv4: inicia com **`01-00-5E`**
  - IPv6: inicia com **`33-33`**
- Exemplos de protocolos que usam multicast: **STP**, **LLDP**, aplicações de **vídeo streaming**.

---

## Processamento de Quadros Ethernet

Quando um quadro Ethernet é transmitido, ele contém dois campos essenciais:

- **Endereço MAC de origem:** identifica o emissor.
- **Endereço MAC de destino:** define o destinatário (unicast, broadcast ou multicast).

A **NIC** do dispositivo receptor verifica se o endereço de destino corresponde ao seu próprio endereço, a um endereço de broadcast ou a um grupo multicast ao qual pertence. Se não houver correspondência, o quadro é descartado.

Importante destacar que, apesar do endereço MAC ser fixado na ROM, **é possível alterá-lo via software** em sistemas modernos. Isso pode ser explorado para **burlar controles de acesso baseados em MAC**, o que mostra que essa forma de filtragem **não é totalmente segura**.

---

## Conclusão

O uso do sistema hexadecimal na representação de endereços MAC proporciona uma maneira eficiente e legível de lidar com dados binários em redes. O **endereço MAC** cumpre um papel fundamental na identificação de dispositivos em redes locais, sendo crucial para o roteamento de quadros Ethernet. Sua estrutura padronizada, combinada com métodos de unicast, broadcast e multicast, permite uma comunicação eficaz e versátil entre os dispositivos da LAN. No entanto, a possibilidade de alteração via software ressalta a necessidade de camadas adicionais de segurança em redes modernas. Compreender o funcionamento e a estrutura dos endereços MAC é essencial para qualquer profissional que deseje atuar na área de redes ou segurança da informação.