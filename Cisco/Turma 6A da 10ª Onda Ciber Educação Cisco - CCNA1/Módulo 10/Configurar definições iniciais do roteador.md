# Etapas da Configuração Básica de um Roteador
As tarefas a seguir devem ser concluídas ao configurar as configurações iniciais em um roteador.

1. Configurar o nome do dispositivo.

```
    Router(config)# hostname hostname
```

2. Proteger o modo EXEC privilegiado.

```
    Router(config)# enable secret password
```

3. Proteger o modo EXEC usuário.

```
    Router(config)# line console 0  
    Router(config-line)# password password  
    Router(config-line)# login
```

4. Proteger o acesso remoto Telnet/SSH.

```
    Router(config-line)# line vty 0 4  
    Router(config-line)# password   password  
    Router(config-line)# login  
    Router(config-line)# transport input {    ssh   | telnet}
```

5. Proteger todas as senhas do arquivo de configuração.

```
    Router(config-line)# exit  
    Router(config)# service password-encryption
```

6. Apresentar a notificação legal.

```
    Router(config)# banner motd delimiter message delimiter
```

7. Salvar a configuração.

```
    Router(config)# end  
    Router# copy running-config startup-config
```