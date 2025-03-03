# Camada 2 do Modelo OSI: Enlace de Dados (Data Link)

## O que é a Camada de Enlace de Dados?

A Camada de Enlace de Dados é a **segunda camada** do modelo OSI. Ela é responsável por garantir uma **comunicação confiável** entre dispositivos conectados na mesma rede física. Aqui, os dados são organizados em **quadros (frames)** e enviados para a camada física (Camada 1).

---

## Principais Funções

- **Endereçamento físico (MAC):** Cada dispositivo possui um endereço MAC (Media Access Control) único, usado para identificação na rede local.
- **Detecção e correção de erros:** Verifica se os dados foram transmitidos corretamente, usando técnicas como CRC (Cyclic Redundancy Check).
- **Controle de acesso ao meio:** Decide qual dispositivo pode usar a rede em determinado momento, evitando colisões (CSMA/CD, CSMA/CA).
- **Encapsulamento de dados:** Organiza os pacotes da Camada 3 (Rede) em quadros (frames) para transmissão.

---

## Protocolos Associados

- **Ethernet:** Protocolo de rede mais comum para LANs.
- **Wi-Fi (802.11):** Protocolo sem fio para redes locais.
- **PPP (Point-to-Point Protocol):** Usado para conexões diretas entre dois pontos.

---

## Importância da Camada de Enlace

Essa camada é essencial porque cria um canal confiável para a transmissão de dados. Sem ela, haveria mais erros na entrega das informações e dispositivos não conseguiriam se identificar adequadamente.

---

## Forma de Praticar

Aqui vai um exemplo básico de como ver informações da Camada 2 usando comandos de rede:

---

### Ver endereço MAC no Windows:

No terminal, rode:

```
    ipconfig /all
```

---

## Aprenda mais
[Data Link Layer in OSI Model](https://www.geeksforgeeks.org/data-link-layer/)