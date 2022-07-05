sexo = ""
idade = 0
qtdMulher = 0
qtdHomens = 0

for i in range(0, 5):
    sexo = input("Digite o seu sexo")
    idade = int(input("digite a idade"))

    if(sexo=="M" or sexo=="m"):
        qtdMulher+=1
    elif(sexo=="M" or sexo=="h"):
        qtdHomens+=1

print("A quantidade de mulheres é", qtdMulher)
print("A quantidade de homens é", qtdHomens)


