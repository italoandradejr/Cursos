'''
criar um programa que calcula a quantidade de tinta necessária para pintar uma parede.
O usuário deve fornecer as seguintes informações: Rendimento, altura e largura.
O prgrama deve mostrar na tela a mensagem: Você necessita de x latas de tinta
'''



def calculo ():
  rendimento = int(input("Digite o rentimento da lata     de tinta "))

  altura = int(input("digite a altura: "))

  largura = int(input("digite a largura: "))
  
  return (altura * largura) / rendimento



print("você necessita de {} latas de tinta".format(calculo()))
  