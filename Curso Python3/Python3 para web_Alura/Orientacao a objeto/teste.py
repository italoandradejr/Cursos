
def cria_conta(numero, titular, saldo, limite):
    conta = {"numero": numero, "titular": titular, "saldo": saldo, "limite": limite}
    return conta

def deposita (conta, valor):
    conta["saldo"] += valor

def saca (conta, valor):
    conta["saldo"] -= valor


def extrato (conta):
    print("Saldo é {}".format(conta["saldo"]))

conta_italo = cria_conta(123,"italo", 55.0, 1000.00)


deposita(conta_italo, 15.0)

extrato(conta_italo)

saca(conta_italo, 20.0)

extrato(conta_italo)
