idade = 20
desconto = 0
valorConsumido = 100

if idade <= 18:
    desconto = 0
else:
    if idade > 18 and idade < 26:
        desconto = 10
    elif idade > 25:
        desconto = 20

valorConsumido = valorConsumido - (valorConsumido*desconto/100)

print(valorConsumido)
print(desconto)

