# Comparando uma função de qualitativo no formato de função para função anônima 
nota = float(input("Digite a nota do(a) estudante: "))

def qualitativo(x):
    return x + 0.5
    
print(qualitativo(nota))


qualitativo_2 = lambda x: x + 0.5
print(qualitativo_2(nota))

print("-------------------------------------------------------------------------------------------")


# Recebendo as notas e calculando a média ponderável
N1 = float(input("Digite a 1ª nota do(a) estudante: "))
N2 = float(input("Digite a 2ª nota do(a) estudante: "))
N3 = float(input("Digite a 3ª nota do(a) estudante: "))

media_ponderavel = lambda x, y, z: (x * 3 + y * 2 + z * 5)/10
media_estudante = media_ponderavel(N1, N2, N3)
print(media_estudante)

print("-------------------------------------------------------------------------------------------")

notas2 = [6.0, 7.0, 9.0, 5.5, 8.0]
qualitativo_3 = 0.5
notas_atualizadas = map(lambda x: x + qualitativo_3, notas2)
notas_atualizadas = list(notas_atualizadas)
print(notas_atualizadas)