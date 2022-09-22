'''
Criar um programa que gere 3 listas de acordo com a necessidade logo abaixo:

lista1 = Funcionários que tem carro e trabalham a noite

lista2 = Funcionários que tem carro e trabalham durante o dia

lista3 = funcionários que não tem carro
'''

funcionarios = ['Ana', 'Marcos', 'Alice', 'Pedro', 'Sophia', 'Bruno', 'Melissa']

turno_dia = ['Ana', 'Marcos', 'Alice', 'Melissa']

turno_noite = ['Pedro', 'sophia', 'Bruno']

tem_carro = ['Marcos', 'Alice', 'Bruno', 'Melissa']

lista1 = set(tem_carro).intersection(turno_noite)
print(lista1)

lista2= set(tem_carro).intersection(turno_dia)
print(lista2)

lista3 = set(funcionarios).difference(tem_carro)
print(lista3)