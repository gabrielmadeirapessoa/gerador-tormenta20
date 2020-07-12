# Gerador de Personagens Aleatórios para Tormenta20

Este gerador combina todas as classes, raças, origens e devotos possíveis de acordo com as regras de Tormenta 20 (v 0.9).

## Funcionamento Padrão
- Um dos 20 deuses maiores do Panteão é sorteado.
- Uma raça (1 chance em 17) e uma classe (1 chance em 14) são sorteadas.
- O par raça/classe é validado contra os devotos permitidos para o deus escolhido, caso não nenhuma das duas esteja dentre os devotos permitidos, um novo par de raça/classe é sorteado e validado até uma combinação válida para aquele deus ser encontrada.
- O gênero do personagem é sorteado.
- Um origem (1 em 35) é sorteada (exceto para Golens).

## Funcionamento da opção 'Devoto de um Deus?'
- Esta opção é selecionada por padrão:
  - Nesse caso, o personagem sempre será devoto de 1 dos 20 deuses maiores do Panteão.
  - O personagem será obrigatoriamente de uma raça e/ou classe que faz parte dos devotos permitidos daquele deus.
- Caso essa opção seja desmarcada:
  - Nenhum deus será selecionado, isso pode ser interpretado como um personagem "ateu" ou "devoto do Panteão".
  - Neste caso, todas as combinações de raça e classe são possíveis, **exceto** druidas.
  - No caso de clérigos, eles sempre serão Clérigos do Panteão conforme as regras.
  - No caso de paladinos, eles sempre serão Paladinos do Bem conforme as regras.

## Funcionamento da opção 'Mais Humanos?'
- Esta opção é desmarcada por padrão:
  - Nesse caso, no momento da seleção da raça, todas as raças possuem uma chance igual de serem sorteadas.
- Caso essa opção seja marcada:
  - Sempre serão gerados personagens alternados entre uma raça não-humana e um humano.

## Funcionamento da rolagem de dados
- Quando a página é carregada ou um novo personagem é gerado são seguidas as regras do livro básico: 4d6 descartando o menor valor.
- Modificadores raciais não são aplicados.
- Caso a soma total de modificadores sejam **menor** do que +6, será possível rolar o menor atributo até esse limite ser atingido.
- Caso a soma total de modificadores sejam **maior ou igual** do que +6, será possível rolar todos os atributos novamente.