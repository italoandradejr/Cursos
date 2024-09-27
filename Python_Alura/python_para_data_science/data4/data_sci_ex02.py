#O código deve conter um tratamento de erro KeyError, imprimindo a informação 'Nome não encontrado', caso ocorra o erro; e imprimir o valor caso não ocorra nenhum.

idades = {'Júlia': 16, 'Carol': 23, 'Alberto': 19, 'Roberta': 17}

try:
    escolhido = input("Digite o nome:")
    valor = idades[escolhido]
except:
    print("Nome não encontrado")
else:
    print(valor)


