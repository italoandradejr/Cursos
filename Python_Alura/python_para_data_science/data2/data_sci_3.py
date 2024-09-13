notas = [8.5, 9.0, 6.0, 10.0]

def media(lista):
    calculo = sum(lista) / len(lista)
    return calculo

resultado = media(notas)

print(resultado)



def boletim(lista):
    calculo_media = sum(lista) / len(lista)
    if calculo_media >= 6:
        situacao = "Aprovado"
    else:
        situacao= "Reprovado"
    return (calculo_media, situacao)

resultado2 = boletim(notas)
print(resultado2)

calculo, situacao = boletim(notas)

print(calculo)
print(situacao)