try:
  valor = int(input('Digite o valor do seu produto: '))
  print(valor)
except ValueError:
  print('Favor digitar um valor em números')
finally:
  print('Codigo ok')


'''  
else:
  print('Usuario digitou um valor correto')
'''