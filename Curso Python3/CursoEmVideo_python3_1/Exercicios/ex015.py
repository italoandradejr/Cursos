'''
ex5: Escreva um programa que pergunte a quantidade de Km percorridos
por um carro alugado e a quantidade de dias pelos quais ele foi alugado.
Calcule o preço a pagar, sabendo que o carro custa
R$60 por dia e R$0,15 por Km rodado.
'''

km = float(input('Qual a distancia percorrida em Km..: '))
aluguel = int(input('Por quantos dias pretende alugar o carro?: '))

aluguel_dia = 60 * aluguel
custo_km = 0.15 * km

print('O custo do km ficou em: R$ {}, e o valor do alugual do carro em: R$ {}'.format(custo_km, aluguel_dia))
print('O total a pagar é: R$ {}'.format(aluguel_dia + custo_km))

