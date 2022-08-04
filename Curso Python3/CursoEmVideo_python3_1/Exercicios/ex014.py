# EX 14
# Escreva um programa que converta uma temperatura digitando em graus Celsius e converta para graus Fahrenheit

temp = float(input('Digite uma temperatura em Celsios..: '))

fahre = (temp*(9/5)+32)

print('A temperatura {}°C em Fahrenheit é: {}°F'.format(temp, fahre))
