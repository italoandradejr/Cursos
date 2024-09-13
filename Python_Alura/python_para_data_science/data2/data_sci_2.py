notas = {'1° Trimestre': 8.5, '2° Trimestre': 9.5, '3° Trimestre': 7}
print(notas)

soma = 0

for nota in notas.values():
    soma+= nota
print(soma)