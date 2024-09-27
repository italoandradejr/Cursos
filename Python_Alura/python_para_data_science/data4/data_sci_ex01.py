#Faça um programa que solicite à pessoa usuária digitar dois números float e calcular a divisão entre esses números. O código deve conter um tratamento de erro, indicando o tipo de erro que foi gerado caso a divisão não seja possível de realizar

try:
    n1 = float(input("Digite o n°1: "))
    n2 = float(input("Digite o n°2: "))
    divisao = n1/n2
    print(divisao)
except Exception as e:
    print(type(e, f'Erro:{e}'))

