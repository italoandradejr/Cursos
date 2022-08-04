# EX 08

#Escreva um programa que leia um valor em metros e o exiba convertido em centimetros e milimetros

metros = float(input('Digite a medida em metros: '))

conv_centimetros = metros * 100
conv_milimetros = metros * 1000

print('A medida de {}m em centimetros é: {}cm'.format(metros, conv_centimetros))

print('A medida de {}m em milimetros é: {}cm'.format(metros, conv_milimetros))