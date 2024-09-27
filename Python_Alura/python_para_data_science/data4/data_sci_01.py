
def media(lista: list=[0]) -> float:
    calculo = sum(lista) / len(lista)
    if len(lista) > 4:
        raise ValueError("A lista possui mais que 4 notas.")
    return calculo

try:
    notas = [6, 7, 8, 4,6]
    resultado = media(notas)
except TypeError:
    print("Somente valores numericos")
except ValueError as e:
    print(e)
else:
    print(resultado)
finally:
    print("Fim")