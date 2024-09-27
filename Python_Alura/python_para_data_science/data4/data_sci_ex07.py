
# você precisa criar uma função divide_colunas que recebe os dados das colunas de pressão e temperatura 
# (que vem no formato de listas) e gerar uma nova coluna com o resultado da divisão. Os parâmetros da função 
# são as duas listas e você deve tratar dentro dela ao menos 2 tipos de exceções:

#Verificar se as listas têm o mesmo tamanho (ValueError)
#Verificar se existe alguma divisão por zero (ZeroDivisionError)

#Dados sem Exceção:
pressoes_1 = [100, 120, 140, 160, 180]
temperaturas_2 = [20, 25, 30, 35, 40]

#Dados com Exceção(ZeroDivisionError):
pressoes_3 = [60, 120, 140, 160, 180]
temperaturas_4 = [0, 25, 30, 35, 40]

#Dados com Exceção(ValueError):
pressoes_5 = [100, 120, 140, 160]
temperaturas_6 = [20, 25, 30, 35, 40]


def divide_colunas(dado_pressoes, dado_temperaturas):
    try:
        if len(dado_pressoes) != len(dado_temperaturas):
            raise ValueError("A lista precisa ter o mesmo tamanho")
        resultado = [round(a / b, 2) for a, b in zip(dado_pressoes, dado_temperaturas)]
    except ValueError as e:
       print(e)
    except ZeroDivisionError as e:
       print(f"{e}: A 2ª lista não pode possuir um valor igual a 0")
    else:
        return resultado
       


dados = divide_colunas(pressoes_5, temperaturas_6)

print(dados)

