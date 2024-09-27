
#A partir da coluna com a informação dos Estados, crie um dicionário usando dict comprehension com a chave sendo o nome de um Estado e o valor sendo a contagem de vezes em que o Estado aparece na lista.

estados = ['SP', 'ES', 'MG', 'MG', 'SP', 'MG', 'ES', 'ES', 'ES', 'SP', 'SP', 'MG', 'ES', 'SP', 'RJ', 'MG', 'RJ', 'SP', 'MG', 'SP', 'ES', 'SP', 'MG']

estados_unicos = list(set(estados))

lista_de_estados =[]

for estado in estados_unicos:
    lista = [uf for uf in estados if uf == estado]
    lista_de_estados.append(lista)

contagem_valores = {estados_unicos[i]: len(lista_de_estados[i]) for i in range(len(estados_unicos))}
print(contagem_valores)