# EX 11

#faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessaria para pinta-la. Sabendo que cada litro de tinta pinta uma área de 2m².

altura = float(input('Qual a altura da parade?: '))
largura = float(input('Qual a largura da parade?: '))

area = round((altura*largura),2)
tinta_2m2 = 2
tinta = area / tinta_2m2

print('Para pintar essa parede de {}m² será necessário {} litros de tinta'.format(area, tinta))