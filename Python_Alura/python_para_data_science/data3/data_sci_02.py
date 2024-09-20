notas = [[8.0, 9.0, 10.0], [9.0, 7.0, 6.0], [3.4, 7.0, 7.0], [5.5, 6.6, 8.0], [6.0, 10.0, 9.5]]
nomes = [('João', 'J720'), ('Maria', 'M205'), ('José', 'J371'), ('Cláudia', 'C546'), ('Ana', 'A347')]

def media(lista: list=[0]) -> float:
    calculo = sum(lista) / len(lista)
    return calculo

medias = [round(media(nota),1) for nota in notas]

print(medias)

print("--------------------------------------------------------------------------------------------------")

#Gera lista de nomes(extraidos da tupla)
nomes_P = [nome[0] for nome in nomes]
estudantes = list(zip(nomes_P, medias))
print(estudantes)

print("--------------------------------------------------------------------------------------------------")

candidatos = [estudante[0] for estudante in estudantes if estudante[1] >= 8.0]
print(candidatos)
