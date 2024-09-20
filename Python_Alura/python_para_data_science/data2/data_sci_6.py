valor = int(input("digite o valor da tabuada: "))

def tabuada(numero):
    print(f'Tabuada do {numero}: ')
    for i in range(11):
        resultado = numero * i
        print(f'{numero} x {i} = {resultado}')


print(tabuada(valor))