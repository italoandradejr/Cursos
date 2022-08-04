# EX 12

#Faça um algoritmo que leia o preço de um produto e mostre seu novo preço. com 5% de desconto.

produto = float(input('Digite o preço do produto: '))

desconto = produto -(produto * 0.05)

print('O produto no valor de R${} com 5% dedesconto fica R$:{}'.format(produto, desconto))