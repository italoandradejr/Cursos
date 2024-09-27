#Você precisa criar uma função que avalia cada palavra desse texto e verificar se o tratamento para retirar os símbolos 
# de pontuação (',' '.', '!' e '?') foi realizado. Caso contrário, será lançada uma exceção do tipo ValueError apontando 
# o 1º caso em que foi detectado o uso de uma pontuação por meio da frase "O texto apresenta pontuações na palavra "[palavra]"."

lista_tratada = ['Python', 'é', 'uma', 'linguagem', 'de', 'programação', 'poderosa', 'versátil',
                  'e', 'fácil', 'de', 'aprender', 'utilizada', 'em', 'diversos', 'campos', 'desde',
                  'análise', 'de', 'dados', 'até', 'inteligência', 'artificial']


lista_nao_tratada = ['Python,', 'é', 'uma', 'linguagem', 'de', 'programação', 'poderosa,', 'versátil',
                  'e', 'fácil,', 'de', 'aprender', 'utilizada!', 'em.', 'diversos', 'campos,', 'desde',
                  'análise', 'de', 'dados', 'até', 'inteligência', 'artificial!']




# criando a função que recebe a lista de palavras
def avalia_texto(texto: list):
  palavras_erradas=[]
  for palavra in texto:
    if ',' in palavra or '.' in palavra or '!' in palavra or '?' in palavra:
      palavras_erradas.append(palavra)
  if palavras_erradas: # true or false
    raise ValueError(f'O texto apresenta pontuações na palavra "{palavras_erradas}".')
  return "Texto já tratado!" # retornando a verificação se não lançada a exceção 
try:
  avaliacao = avalia_texto(lista_nao_tratada)
except Exception as e:
  print(e)
else:
  print(avaliacao)


