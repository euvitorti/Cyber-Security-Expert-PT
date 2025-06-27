# Análise sobre Encapsulamento Ethernet

## Introdução

A Ethernet é uma das tecnologias mais difundidas para redes locais (LANs) com fio, sendo utilizada amplamente em ambientes domésticos, empresariais e industriais. Sua importância decorre da confiabilidade, escalabilidade e simplicidade de implementação. Operando nas camadas física e de enlace do modelo OSI, ela é definida por padrões do IEEE, como os 802.3 e 802.2. Neste texto, será feita uma análise clara e concisa sobre o funcionamento da Ethernet, suas subcamadas, estrutura de quadros e a evolução dos métodos de acesso ao meio.

---

## 1. Estrutura da Ethernet

A Ethernet utiliza diferentes tipos de cabos, como par trançado, coaxial e fibra óptica. Ela suporta diversas velocidades de transmissão, desde 10 Mbps até 100 Gbps, o que a torna adaptável a diferentes necessidades de rede.

Ela é composta por dois componentes principais:
- **Camada de enlace de dados**
- **Camada física**

A camada de enlace é subdividida em duas subcamadas fundamentais para o funcionamento da comunicação.

---

## 2. Subcamadas da Camada de Enlace

### *Subcamada LLC (Logical Link Control)*

- Protocolo definido pelo IEEE 802.2.
- Atua como intermediária entre a camada de rede (como IPv4 ou IPv6) e o hardware.
- Identifica o protocolo de camada superior para que diferentes protocolos possam coexistir na mesma rede.

### *Subcamada MAC (Media Access Control)*

- Definida por padrões como IEEE 802.3.
- Responsável pelo **encapsulamento de dados** e **acesso à mídia**.
- Implementada no hardware da interface de rede (NIC).
- Fornece endereçamento por meio de **endereços MAC** e implementa os mecanismos de controle de acesso ao meio.

---

## 3. Encapsulamento de Dados

O encapsulamento de dados refere-se à criação do **quadro Ethernet**, que é a unidade básica de transporte de informações na rede. Este processo inclui:

- Inserção de **endereços MAC de origem e destino**.
- Inclusão de um campo de **verificação de erros (FCS)**.
- Preparação dos dados para transmissão física.

---

## 4. Evolução do Controle de Acesso: CSMA/CD

Antigamente, redes Ethernet operavam em **modo half-duplex** com hubs, o que implicava em um meio compartilhado. Para evitar colisões, usava-se o protocolo **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**:

- Dispositivos escutavam o canal antes de transmitir.
- Se duas transmissões ocorressem ao mesmo tempo, havia colisão.
- Um algoritmo de recuo determinava quando tentar novamente.

### Exemplo:
Em uma rede com hub, dois computadores poderiam tentar transmitir simultaneamente, gerando colisão. O CSMA/CD era responsável por resolver essa situação.

---

## 5. Ethernet Moderna: Full-Duplex com Switches

Hoje, as redes utilizam **switches**, permitindo conexões **ponto a ponto** e comunicação em **full-duplex**:

- Não há compartilhamento de meio.
- Dispositivos podem transmitir e receber dados ao mesmo tempo.
- O uso de CSMA/CD se tornou desnecessário.

---

## 6. Estrutura de um Quadro Ethernet

Um quadro Ethernet padrão possui os seguintes campos:

- **Preâmbulo e Delimitador de Início**: 8 bytes para sincronização entre transmissor e receptor.
- **Endereço MAC de Destino**: 6 bytes.
- **Endereço MAC de Origem**: 6 bytes.
- **Tipo/Comprimento**: 2 bytes, indicando o protocolo de camada superior (ex: 0x0800 para IPv4).
- **Dados**: de 46 a 1500 bytes. Se menor que 46, usa-se "padding" para atingir o tamanho mínimo.
- **FCS (Frame Check Sequence)**: 4 bytes com verificação de erro por CRC.

### Regras de tamanho:

- **Mínimo**: 64 bytes — abaixo disso, o quadro é descartado como "fragmento de colisão".
- **Máximo**: 1518 bytes — quadros maiores podem ser tratados como "jumbo frames" e precisam de suporte específico.

---

## Conclusão

A Ethernet é uma tecnologia robusta e flexível que evoluiu significativamente desde suas primeiras versões. Com a introdução de switches e o uso do modo full-duplex, tornou-se mais eficiente ao eliminar a necessidade de protocolos como o CSMA/CD. A estrutura de quadros padronizada garante a interoperabilidade entre dispositivos, e a separação em subcamadas (LLC e MAC) facilita a modularidade do funcionamento da rede. Esse conjunto de características faz da Ethernet a base sólida das redes locais modernas.