cores = ['amarelo', 'verde', 'azul', 'vermelho']

cor_cliente = input('digite cor desejada: ')

if cor_cliente.lower() in cores:
  print('Em estoque')
else:
  print('cor indisponível')