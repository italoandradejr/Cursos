#criar um programa que leia dois números e mostre a soma entre eles

n1 = int(input('Ditige um número: '))
n2 = int(input('Ditige outro um número: '))
soma = n1 + n2

print('A soma entre {} e {} é: {}'. format(n1, n2, soma))


'''
faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e
todas as informações possiveis sobre ela.
'''

algo = input('Digite algo: ')
print(type(algo))
print(algo.isalpha())
print(algo.isalnum())
print(algo.isnumeric())
print(algo.isupper())


