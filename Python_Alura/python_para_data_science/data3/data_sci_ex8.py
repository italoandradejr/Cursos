#Crie uma lista de tuplas em que cada tupla tenha id, quantidade, preço e valor total, na qual a primeira tupla é o cabeçalho da tabela.


id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
quantidade = [15, 12, 1, 15, 2, 11, 2, 12, 2, 4]
preco = [93.0, 102.0, 18.0, 41.0, 122.0, 14.0, 71.0, 48.0, 14.0, 144.0]

lista =[("Id", "Quantidade", "Preço", "Total")]


for i in range(len(id)):
    lista.append(( i, quantidade[i], preco[i], quantidade[i] * preco[i]))

print(lista)

print("----------------------------------------------------------------------")
# faz a mesma coisa 

tabela = [('id', 'quantidade', 'preco', 'total')]
tabela += [(id[i], quantidade[i], preco[i], quantidade[i]*preco[i]) for i in range(len(id))]

print(tabela)