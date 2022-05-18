print("***********************************")
print("bem vindo no jogo de adivinhação")
print("***********************************")

numero_secreto = 42
total_de_tentativas = 3
rodada = 1

while rodada <= total_de_tentativas:
    print("tentativa {} de {}".format(rodada, total_de_tentativas))
    chute = int(input("Digite um Número entre 1 e 100: "))

    if chute < 1 or chute > 100:
        print("Número digitado não está entre 1 e 100!!!")
        continue

    acertou = numero_secreto == chute
    maior = chute > numero_secreto
    menor = chute < numero_secreto

    if acertou:
        print("você acertou!")
        break
    else:
        if maior:
            print("Você errou, seu chute foi maior que o número secreto")
        elif menor:
            print("Você errou, seu chute foi menor que o número secreto")

    rodada = rodada + 1

print("Fim de jogo")

