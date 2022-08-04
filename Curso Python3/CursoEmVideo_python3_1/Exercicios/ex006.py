# EX 06

# crie uma algoritmo que leia um numero e mostre o seu dobro, triplo e raiz quadrada

numero = int(input('Digite um número: '))

dobro = numero * 2
triplo = numero * 3
raiz = numero ** (1/2)

print('O dobro de {} é: {}'.format(numero, dobro))
print('O triplo de {} é: {}'.format(numero, triplo))
print('A raiz Quadrada de {} é: {:.2f}'.format(numero, raiz))