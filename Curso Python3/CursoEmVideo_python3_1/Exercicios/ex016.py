'''
ex16: Crie um programa que leia um número Real qualquer
 pelo teclado e mostre na tela a sua porção Inteira.
'''
from math import trunc

n_real = float(input('Digite uma número inteiro: '))

p_interia = trunc(n_real)

print(p_interia)

