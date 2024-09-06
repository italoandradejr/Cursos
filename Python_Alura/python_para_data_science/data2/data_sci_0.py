import matplotlib.pyplot as plt
from random import choice


estudantes = ["João", "Maria", "José"]
estudantes_2 = ["João", "Maria", "José", "Ana"]
notas = [8.5, 9.0, 6.5]

#cria um grafico com os paramêtros informados
#plt.bar(x=estudantes, height=notas)
#plt.show()

random_estudantes = choice(estudantes_2)
print(random_estudantes)
