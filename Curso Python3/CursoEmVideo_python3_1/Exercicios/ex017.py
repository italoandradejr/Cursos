'''
ex17: Faça um programa que leia o comprimento do cateto oposto e do cateto
adjacente de um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa
'''

cat_oposto = float(input('Digite o comprimento do cateto oposto: '))
cat_Adjacente = float(input('Digite o comprimento do cateto adjacento: '))

hipo = (cat_oposto ** 2 + cat_Adjacente ** 2) **(1/2)

print('A hipotenusa vai medir {:.2f}'.format(hipo))
