#Crie um código para gerar uma lista que armazena o terceiro elemento de cada tupla contida na seguinte lista de tuplas:

lista_de_tuplas = [('Pedro', 1.74, 81), ('Júlia', 1.65, 67), ('Otávio', 1.81, 83)]

elemento_3 =[]

for i in lista_de_tuplas:
    elemento_3.append(i[2])
print(elemento_3)