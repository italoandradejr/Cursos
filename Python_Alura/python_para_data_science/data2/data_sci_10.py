
lista = []

for i in range(1,5):
    notas = int(input("Digite a nota N° {i}: "))
    lista.append(notas)

def receba (num):
    maior = max(num)
    menor = min(num)
    media = sum(num) / len(num)
    situacao = "aprovado" if media > 6 else "Reprovado"
    print("---------------------------------------")

    return {"maior": maior, "menor": menor, "media": media, "situação": situacao}

print(receba(lista))