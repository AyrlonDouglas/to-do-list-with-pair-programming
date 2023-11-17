Feature: Adicionar uma tarefa a lista

Eu como usuário quero adicionar uma tarefa a lista de
tarefas

Cenário: sucesso na adição de tarefa
Dado um usuário na página da lista de tarefas
Quando eu escrever o nome da tarefa
E eu acionar a adição da tarefa
Então a nova tarefa deve aparecer na lista de tarefas



Feature: Remover uma tarefa da list

Eu como usuário quero remover uma tarefa da lista de
tarefas

Cenário: sucesso na remoção de uma tarefa
Dado um usuário na página da lista de tarefas
Quando eu clicar no elemento de remover uma tarefa específica
Então esta tarefa deve ser removida da lista