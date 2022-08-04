
class Conta:
    def __init__(self, numero, titular, saldo, limite):
        print("construindo objeto...{}".format(self))
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite

conta = Conta(123, "Italo", 55.5, 1000.0)




