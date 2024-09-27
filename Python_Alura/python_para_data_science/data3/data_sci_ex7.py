#Uma clínica analisa dados de pacientes e armazena o valor numérico da glicose em um banco de dados e gostaria de rotular os dados da seguinte maneira:

#Glicose igual ou inferior a 70: 'Hipoglicemia'
#Glicose entre 70 a 99: 'Normal'
#Glicose entre 100 e 125: 'Alterada'
#Glicose superior a 125: 'Diabetes'


glicemia = [129, 82, 60, 97, 101, 65, 62, 167, 87, 53, 58, 92, 66, 120, 109, 62, 86, 96, 103, 88, 155, 52, 89, 73]


lista = ([])

for i in glicemia:
    if i < 70:
        lista.append((i,"Hipoglicemia"))
    elif 70 <= i < 99:
        lista.append((i,"Normal"))
    elif 100 <= i < 125:
        lista.append((i,"Alterada"))
    else:
        lista.append((i,"Diabetes"))


print(lista)


# faz a mesma coisa com list comprehension

rotulos = [('Hipoglicemia', glicose) if glicose <= 70 else ('Normal', glicose) if glicose < 100 else ('Alterada', glicose) if glicose < 125 else ('Diabetes', glicose) for glicose in glicemia]
print(rotulos)