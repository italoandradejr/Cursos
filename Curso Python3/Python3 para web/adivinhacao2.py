import random

def jogar():
    print("***********************************")
    print("bem vindo no jogo de adivinhação")
    print("***********************************")

    numero_secreto = random.randrange(1, 101)
    total_de_tentativas = 0
    pontos = 1000

    print("Qual nível de dificultade?")
    print("(1) Fácil (2) Médio (3) Difícil")

    nivel = int(input("Defina o nível::"))
    if nivel == 1:
        total_de_tentativas = 20
    elif nivel == 2:
        total_de_tentativas = 10
    else:
        total_de_tentativas = 5

    for rodada in range(1, total_de_tentativas +1):
        print("tentativa {} de {}".format(rodada, total_de_tentativas))
        chute = int(input("Digite um Número entre 1 e 100: "))

        if chute < 1 or chute > 100:
            print("Número digitado não está entre 1 e 100!!!")
            continue

        acertou = numero_secreto == chute
        maior = chute > numero_secreto
        menor = chute < numero_secreto

        if acertou:
            print("você acertou! e fez {} pontos!!".format(pontos))
            break
        else:
            if maior:
                print("Você errou, seu chute foi maior que o número secreto")
            elif menor:
                print("Você errou, seu chute foi menor que o número secreto")
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos

    print("Fim de jogo")
    print(numero_secreto, "era o número secreto")

if __name__ == "__main__": ## executa o código individualmente
    jogar()