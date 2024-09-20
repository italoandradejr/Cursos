#Para calcular a pontuação de um(a) skatista, você precisa eliminar a maior e a menor pontuação dentre 
# as 5 notas e tirar a média das 3 notas que sobraram. Retorne a média para apresentar o texto:

notas_m = []

for i in range(1,6):
    nota = int(input("Digite a nota N° {i}: "))
    notas_m.append(nota)

def maior_menor(lista):
    lista.remove(max(lista))
    lista.remove(min(lista))
    return sum(lista) /len(lista)

print(maior_menor(notas_m))

