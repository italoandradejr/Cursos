# EX 10

# crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar (US1,00=3,27)

real = float(input('quantos reais (R$) gostaria de converter?: '))

dolar = 3.27
converte = round((real / dolar), 2)

print('Convertendo {} em Dolares, será: {} USD'.format(real, converte))