# EX 13

#faça um algoritmo que leia o salario de um funcionario e mostre seu novo salario, com 15% de aumento.

salario = float(input('Digite o valor do Salário: '))

aumento = salario + (salario * 0.15)

print('o Salário de R${} com 15% de aumento, ficara em R$:{}'.format(salario, aumento))