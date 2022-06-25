import random

def jogar():
    print("*************************************")
    print("***Escolha o seu jogo***")
    print("*************************************")

    arquivo = open("palavras.txt", "r")
    palavras = []

    for linha in arquivo:
        linha = linha.strip()
        palavras.append(linha)

    arquivo.close()

    numero = random.randrange(0, len(palavras))
    palavra_secreta = palavras[numero].upper()

    letras_acertadas = ["_" for letra in palavra_secreta]


    enforcou = False
    acertou = False
    erros = 0

    print(letras_acertadas)

    #enquanto não enforcou e não acertou
    while(not enforcou and not acertou):

        chute = input("Qual a letra?")
        chute = chute.strip().upper()

        if(chute in palavra_secreta):
            index = 0
            for letra in palavra_secreta:
                if(chute == letra):
                    letras_acertadas[index] = letra
                index += 1
        else:
            erros += 1

        enforcou = erros == 6 # retorna true ou false
        acertou = "_" not in letras_acertadas # retorna true ou false
        print(letras_acertadas)


    if(acertou):
        print("você ganhou!!")
    else:
        print("você perdeu!!")

    print("fim de jogo")


if __name__ == "__main__": ## executa o código individualmente
    jogar()