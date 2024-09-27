#Crie um dicionário usando o dict comprehension em que as chaves estão na lista 
# meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] e os valores estão em despesa = [860, 490, 1010, 780, 900, 630, 590, 770, 620, 560, 840, 360]

meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
despesa = [860, 490, 1010, 780, 900, 630, 590, 770, 620, 560, 840, 360]

mes_despesa={}

for i in range(len(meses)):
    mes_despesa[meses[i]] = despesa[i]
    
print(mes_despesa)


# o mesmo resultado com  dict comprehension

dicionario = {meses[i]: despesa[i] for i in range(len(meses))}
print(dicionario)