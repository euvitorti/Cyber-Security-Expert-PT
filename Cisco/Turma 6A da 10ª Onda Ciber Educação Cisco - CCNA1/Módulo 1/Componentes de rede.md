# Funções do Host

## Hosts e Endereçamento IP

Todos os dispositivos conectados a uma rede que participam diretamente da comunicação são chamados de **hosts**, também conhecidos como **dispositivos finais**. Alguns hosts são também chamados de **clientes**, mas o termo "host" é mais técnico e específico, pois se refere a dispositivos que possuem um **endereço IP (Internet Protocol)**.

- O endereço IP identifica tanto o host quanto a rede à qual ele pertence.
- Ele é necessário para enviar e receber dados corretamente em uma rede.

**Exemplo:**  
Um computador doméstico com IP `192.168.0.2` pode se comunicar com o roteador `192.168.0.1` para acessar a internet.

## Servidores e Clientes

**Servidores** são computadores com software específico que permite fornecer serviços como e-mail, arquivos ou páginas web para outros dispositivos na rede.

- Cada tipo de serviço exige um software de servidor diferente (ex: servidor web, servidor de e-mail).
- Um servidor pode atender vários clientes ao mesmo tempo.

**Clientes** são hosts que usam software para **solicitar e exibir informações** obtidas dos servidores.

- Exemplos de software cliente incluem navegadores (Chrome, Firefox), aplicativos de e-mail, etc.
- Um mesmo computador pode rodar vários tipos de software cliente.

**Exemplo:**  
Um usuário pode, ao mesmo tempo:
- Verificar o e-mail
- Navegar em um site
- Ouvir música por streaming
- Trocar mensagens instantâneas

## Rede Ponto-a-Ponto

Em redes **ponto-a-ponto (P2P)**, os computadores atuam como **clientes e servidores simultaneamente**, sem a necessidade de servidores dedicados.

### Vantagens:
- Fácil de configurar
- Menor complexidade
- Custo reduzido
- Ideal para compartilhar arquivos e impressoras em redes domésticas

### Desvantagens:
- Falta de administração centralizada
- Menor segurança
- Baixa escalabilidade
- Todos os dispositivos podem ficar sobrecarregados

**Exemplo:**  
Em uma rede doméstica, um notebook pode compartilhar pastas com um PC sem a necessidade de servidor.

## Dispositivos Finais e Intermediários

### Dispositivos Finais

São aqueles com os quais o usuário interage diretamente, como:

- Computadores
- Tablets
- Smartphones
- Impressoras de rede

Cada um tem um endereço próprio na rede. Quando um dispositivo final envia uma mensagem, ele precisa do endereço do **destino final** para entregá-la corretamente.

### Dispositivos Intermediários

Conectam os dispositivos finais à rede e interligam redes diferentes.

Funções típicas incluem:
- Regenerar e retransmitir sinais
- Manter rotas disponíveis
- Notificar falhas
- Roteamento alternativo em caso de erro
- Classificar mensagens por prioridade
- Aplicar políticas de segurança (firewalls)

**Exemplos:**
- Roteadores
- Switches
- Pontos de acesso (Access Points)
- Firewalls

## Meios de Rede

A mídia de rede é o meio físico ou lógico pelo qual os dados trafegam.

### Tipos de mídia:
- **Cabos metálicos (par trançado, coaxial):** transmitem dados como impulsos elétricos
- **Fibra óptica:** dados via pulsos de luz
- **Sem fio (wireless):** dados por ondas eletromagnéticas

### Critérios para escolha:
- Distância de transmissão
- Ambiente de instalação
- Largura de banda e velocidade necessárias
- Custo do material e da instalação

**Exemplo:**
- Uma empresa usa fibra óptica para conectar prédios distantes.
- Uma casa utiliza cabo UTP para conectar computadores ao roteador.

---

## Saiba Mais

- [CCNA: Network Media Types](https://www.ciscopress.com/articles/article.asp?p=31276)
- [Dispositivos Intermediários (Open University)](https://www.open.edu/openlearn/mod/oucontent/view.php?id=48444&section=3.4)