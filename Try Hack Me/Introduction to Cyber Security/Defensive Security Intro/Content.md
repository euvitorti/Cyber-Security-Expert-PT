# Para proteger um sistema, você deve pensar como um defensor.

No módulo Defensive Security, aprendi que o principal objetivo da segurança defensiva é duplo: impedir que intrusões ocorram e detectar rapidamente quando elas acontecem, possibilitando uma resposta eficaz. Esse campo é essencial para as equipes Blue, que atuam na proteção contínua dos sistemas e na mitigação de riscos. Durante o treinamento, foram apresentadas diversas estratégias e práticas para manter os ativos seguros e responder de forma adequada a qualquer tentativa de invasão.

---

## As práticas de segurança defensiva

Para atingir esses objetivos, são adotadas várias medidas, tais como:

- **Conscientização em segurança cibernética:** Treinar os usuários sobre boas práticas e os riscos do ambiente digital é fundamental para evitar que ataques tenham sucesso.

- **Documentação e gerenciamento de ativos:** Identificar, catalogar e monitorar todos os sistemas e dispositivos que devem ser protegidos garante uma visão clara dos pontos vulneráveis.

- **Atualização e aplicação de patches:** Manter computadores, servidores e dispositivos de rede devidamente atualizados e corrigidos minimiza as vulnerabilidades conhecidas.

- **Implementação de dispositivos de segurança preventiva:** Configurar firewalls para controlar o tráfego de rede e utilizar sistemas de prevenção de intrusões (IPS) para bloquear atividades maliciosas são medidas críticas para evitar ataques.

- **Configuração de dispositivos de registro e monitoramento:** Estabelecer mecanismos de log e monitoramento permite detectar rapidamente atividades suspeitas, possibilitando uma resposta imediata a possíveis incidentes.

---

## Central de Operações de Segurança (SOC)

A Central de Operações de Segurança (SOC) é composta por profissionais de cibersegurança que monitoram a rede e seus sistemas para identificar eventos maliciosos. Entre as principais áreas de interesse para um SOC, destacam-se:

- **Vulnerabilidades:** Sempre que uma vulnerabilidade é descoberta, é essencial corrigi-la por meio de atualizações ou patches. Na ausência de uma correção, devem ser adotadas medidas para impedir que um atacante a explore. Embora a remediação seja vital, nem sempre seja responsabilidade direta do SOC.

- **Violações de política:** Uma política de segurança define um conjunto de regras para proteger a rede e os sistemas. Por exemplo, o upload de dados confidenciais da empresa para um serviço de armazenamento online pode ser considerado uma violação que precisa ser monitorada.

- **Atividade não autorizada:** Se as credenciais de um usuário forem roubadas e utilizadas para acessar a rede, o SOC deve detectar e bloquear esse acesso rapidamente, evitando danos maiores.

- **Intrusões na rede:** Mesmo com uma segurança robusta, intrusões podem ocorrer—seja por meio de links maliciosos ou pela exploração de servidores públicos.

Além dessas atividades, as operações de segurança englobam tarefas complementares, como a inteligência de ameaças.

---

## Inteligência de Ameaças (Threat Intelligence)

No contexto da segurança defensiva, a inteligência de ameaças envolve a coleta e análise de informações sobre inimigos reais e potenciais. Uma ameaça é qualquer ação capaz de interromper ou afetar negativamente um sistema. Dessa forma, a inteligência de ameaças tem como objetivo reunir dados que permitam à empresa se preparar melhor contra possíveis adversários, promovendo uma defesa informada e proativa.

Entre os adversários que podem ser identificados, estão:

- **Grupos de ransomware:** Visam extorquir financeiramente as vítimas, bloqueando o acesso a sistemas e dados.

- **Exércitos cibernéticos de Estados-nação:** Atuam por motivos políticos ou estratégicos, direcionando ataques com alto impacto.

- **Adversários focados em dados confidenciais:** Dependendo do setor, os ataques podem ter como alvo o roubo de informações de clientes ou propriedade intelectual.

- **Ataques com impacto operacional:** Em setores industriais, como o de petróleo, adversários podem tentar interromper a produção, causando prejuízos significativos.

Com base no perfil e no setor da empresa, é possível prever quais tipos de adversários são mais prováveis e adotar medidas específicas para diminuir os riscos.

---

## Forense Digital e Resposta a Incidentes (DFIR)

Nesta seção, abordamos os pilares de Forense Digital, Resposta a Incidentes e Análise de Malware, essenciais para investigar e responder a ameaças cibernéticas.

### Forense Digital

A forense é a aplicação da ciência para investigar crimes e estabelecer fatos. Com a proliferação de sistemas digitais, como computadores e smartphones, surgiu a forense digital, a evolução da forense computacional, voltada a analisar evidências de ataques e identificar os autores desses ataques. Esse processo abrange diversas áreas, tais como:

- **Sistema de Arquivos:** A análise de uma imagem forense (cópia de baixo nível) do armazenamento revela informações valiosas, como programas instalados, arquivos criados, parcialmente sobrescritos e deletados.

- **Memória do Sistema:** Caso o atacante execute um programa malicioso em memória sem salvá-lo em disco, a captura de uma imagem forense da memória é a melhor forma de compreender o ataque.

- **Logs do Sistema:** Os arquivos de log presentes em computadores e servidores registram atividades que podem persistir mesmo após tentativas de remoção de rastros pelo atacante.

- **Logs de Rede:** Os registros dos pacotes que trafegaram pela rede auxiliam na identificação e análise de atividades suspeitas, permitindo compreender melhor o contexto do ataque.

### Resposta a Incidentes

Um incidente pode variar desde uma violação de dados ou ataque cibernético até eventos menos críticos, como uma tentativa de intrusão ou uma violação de política. Exemplos de incidentes incluem tornar a rede inacessível, desfigurar o site público ou roubar dados sensíveis. Para lidar com esses incidentes, é fundamental contar com um plano estruturado que permita reduzir os danos e recuperar os sistemas o mais rapidamente possível. As fases principais do processo de resposta a incidentes são:

- **Preparação:** Treinamento e capacitação de uma equipe dedicada, além da implementação de medidas preventivas para minimizar a ocorrência de incidentes.

- **Detecção e Análise:** Monitoramento contínuo do ambiente para identificar incidentes e análise detalhada para determinar sua gravidade e impacto.

- **Contenção, Erradicação e Recuperação:** Ações imediatas para isolar o incidente, eliminar a ameaça e restaurar os sistemas afetados, evitando a propagação do ataque.

- **Atividades Pós-Incidente:** Após a recuperação, um relatório é elaborado e as lições aprendidas são compartilhadas, contribuindo para a melhoria contínua da segurança.

### Análise de Malware

Malware, ou software malicioso, refere-se a programas, documentos e arquivos que podem ser salvos em disco ou transmitidos pela rede, mas que apresentam intenções prejudiciais. Entre os tipos de malware, destacam-se:

- **Vírus:** Trata-se de um pedaço de código que se anexa a um programa com o objetivo de se espalhar de um computador para outro, alterando, sobrescrevendo e apagando arquivos. Os efeitos podem variar desde a lentidão do sistema até torná-lo inutilizável.

- **Cavalo de Troia (Trojan Horse):** Um programa que oferece uma funcionalidade desejada, mas esconde uma função maliciosa em seu interior. Por exemplo, um usuário pode baixar um reprodutor de vídeo de um site duvidoso que, na verdade, concede controle total do sistema ao atacante.

- **Ransomware:** Software malicioso que criptografa os arquivos do usuário, tornando-os ilegíveis sem a senha de descriptografia. O atacante então oferece a chave mediante o pagamento de um “resgate”.

A análise de malware tem como objetivo compreender esses programas prejudiciais por meio de diferentes abordagens:

- **Análise Estática:** Consiste em examinar o malware sem executá-lo, utilizando o conhecimento de linguagens de montagem (assembly) para interpretar as instruções básicas do processador e identificar padrões maliciosos.

- **Análise Dinâmica:** Envolve a execução do malware em um ambiente controlado (sandbox) para monitorar seu comportamento em tempo real, permitindo observar como ele atua e se propaga no sistema.

---

## Aplicação das práticas

A integração das áreas de Forense Digital, Resposta a Incidentes e Análise de Malware possibilita uma abordagem completa para investigar e responder a ameaças cibernéticas. Ao coletar evidências digitais e agir rapidamente diante de incidentes, as organizações não só recuperam seus sistemas, mas também fortalecem sua postura de segurança, preparando-se melhor para enfrentar futuras ameaças.

---

## Desafio

Durante um desafio no TryHackMe, participei de uma simulação onde fui colocado no papel de analista de SOC, responsável por proteger um banco. O cenário envolvia o uso de um SIEM, que exibia alertas sobre eventos de segurança em tempo real. Um desses alertas indicava uma tentativa de login falha múltiplas vezes, enquanto outro mostrava uma conexão vinda de um IP desconhecido. A partir disso, precisei investigar qual IP era suspeito e, depois de confirmar que o IP estava, de fato, relacionado a um possível ataque, bloqueei esse acesso.

Para verificar a confiabilidade do IP, é comum utilizar ferramentas como:

- **VirusTotal:** Para verificar se o IP foi associado a atividades maliciosas.
- **AbuseIPDB:** Uma plataforma que permite checar se um IP foi reportado como suspeito por outros usuários.
- **IPVoid:** Utilizado para coletar mais informações sobre a origem do IP e identificar possíveis alertas associados.

Essas ferramentas ajudam a determinar se o IP é confiável ou se deve ser bloqueado para proteger o sistema.

---

## Importante

Vale ressaltar que todas as atividades e simulações realizadas durante o treinamento ocorreram em ambientes controlados e seguros, com as devidas autorizações e respeitando os limites éticos e legais. As práticas de segurança defensiva, a atuação do SOC, a inteligência de ameaças e as atividades de DFIR são fundamentais para proteger sistemas reais, assegurando a integridade e a continuidade dos serviços prestados.