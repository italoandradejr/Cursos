maiornota = 0
contador = 0
nota = 0
somaNotas = 0

while contador < 3:
    nota = float(input("Nota do Aluno"))
    somaNotas = somaNotas + nota

    contador+=1

    if(contador==1):
        maiornota = nota
    else:
        if(nota>maiornota):
            maiornota = nota

media = somaNotas/contador

print("média de notas:", media)
print("a maior nota:", maiornota)