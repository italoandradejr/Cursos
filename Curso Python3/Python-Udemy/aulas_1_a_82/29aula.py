compra_confirmada = True
dados_compra = 'compra no valor de 12.50 entrega conformada'


for enviar in range(3):
  if compra_confirmada:
    print(dados_compra)
    print('Detalhes enviados para o seu email')
    break
else:
  print('Falha na compra')
