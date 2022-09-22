'''
Calculadora de IMC

qual é a altura em cm:
qual é o seu peso em kg:

menor que 18.5 - magreza
entre 18.5 e 24.9 - normal
entre 25,0 e 29.9 - sobrepeso
entre 30,0 e 39.9 - obesidade
maior que 40.0 - obesidade grave
'''

altura = float(input("Qual a sua altura em cm: "))
peso = float(input("qual o seu peso em kg: "))

imc = peso / ((altura ** 2) / 10000)

if imc < 18.5:
  print("Seu imc é: {}, magreza".format(imc))

elif imc >= 18.5 and imc <= 24.9:
  print("Seu imc é: {}, normal".format(imc))

elif imc >= 25.0 and imc <= 29.9:
  print("Seu imc é: {}, sobrepeso".format(imc))

elif imc >=30.0 and imc <= 39.9:
  print("Seu imc é: {}, obesidade".format(imc))

elif imc > 40.0:
  print("Seu imc é: {}, obesidade grave".format(imc))