#Crie uma lista dos quadrados dos números da seguinte lista:

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

retorno_quadrado=[]

def quadrado (lista_num):
    for i in range(len(lista_num)):
        retorno_quadrado.append(lista_num[i] ** 2)
    return retorno_quadrado

print(quadrado(lista))


