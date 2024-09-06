import numpy as np
from random import choice, choices, randrange, randint
from math import pow, sqrt, pi


#Crie um programa que leia a seguinte lista de números e escolha um número desta aleatoriamente.
lista = [8, 12, 54, 23, 43, 1, 90, 87, 105, 77]

lista_aleat = choice(lista)
print(lista_aleat)


#Crie um programa que sorteia, aleatoriamente, um número inteiro positivo menor que 100.

inteiro = randrange(100)
print(inteiro)


#Crie um programa que solicite à pessoa usuária digitar dois números inteiros e calcular a potência do 1º número elevado ao 2º.

base = int(input("Digite a base da potência: "))
expoente = int(input("Digite o expoente da potência: "))

calc =pow(base, expoente)
print(calc)

#Um programa deve ser escrito para sortear uma pessoa seguidora de uma rede social para ganhar um prêmio. A lista de participantes é numerada e devemos escolher aleatoriamente um número de acordo com a quantidade de participantes. Peça à pessoa usuária para fornecer o número de participantes do sorteio e devolva para ela o número sorteado.

n = int(input("Digite o n° de participantes do sorteio: "))
sorteado = randint(1, n)
print(sorteado)



 #Você recebeu uma demanda para gerar números de token para acessar o aplicativo de uma empresa. O token precisa ser par e variar de 1000 até 9998. Escreva um código que solicita à pessoa usuária o seu nome e exibe uma mensagem junto a esse token gerado aleatoriamente.

nome = input("qual o seu nome?: ")
token = randrange(1000, 10000, 2)
print(f'Seu token é: {token}')


#Para diversificar e atrair novos(as) clientes, uma lanchonete criou um item misterioso em seu cardápio chamado "salada de frutas surpresa". Neste item, são escolhidas aleatoriamente 3 frutas de uma lista de 12 para compor a salada de frutas da pessoa cliente. Crie o código que faça essa seleção aleatória de acordo com a lista abaixo:

frutas = ["maçã", "banana", "uva", "pêra","manga", "coco", "melancia", "mamão", "laranja", "abacaxi", "kiwi", "ameixa"]
salada = choices(frutas, k=3)
print(f"A salada surpresa é: {salada[0]}, {salada[1]} e {salada[2]}")


#Você recebeu um desafio de calcular a raiz quadrada de uma lista de números, identificando quais resultaram em um número inteiro. A lista é a seguinte:

numeros = [2, 8, 15, 23, 91, 112, 256]
raiz =[]
for numero in numeros:
    raiz.append(sqrt(numero))
# laço for para ler a lista raiz e exibir um texto só quando a raiz for um valor inteiro
for i in range(len(raiz)):
# condição para testar se um número é inteiro (Ex: 2.5 // 1 = 2 ... 2 != 2.5)
    if raiz[i] // 1 == raiz[i]:
        print(f"O número {numeros[i]} possui raiz quadrada inteira igual a {int(raiz[i])}")


#Faça um programa para uma loja que vende grama para jardins. Essa loja trabalha com jardins circulares e o preço do metro quadrado da grama é de R$ 25,00. Peça à pessoa usuária o raio da área circular e devolva o valor em reais do quanto precisará pagar.

raio = float(input("Digite o raio da área circular em metros: "))
area = pi*pow(raio, 2)
valor = area * 25.00
# Exibição do cálculo e custo na tela. O round(n,2) arredonda qualquer número em 2 casas decimais
print(f"Você precisará pagar R$ {round(valor,2)} por uma área de {round(area,2)} metros de grama")