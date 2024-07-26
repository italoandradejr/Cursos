class Restaurante:
    restaurantes = []

    def __init__(self, nome, categoria): # construtor (self expecifica que os argumentos referenciao ao construtor)
        self.nome = nome
        self.categoria = categoria
        self.ativo = False
        Restaurante.restaurantes.append(self)

    
    def __str__(self): # self é a referencia atual da instancia que esta sendo chamada no momento
        return f'{self.nome} | {self.categoria}'
    
    def listar_restaurantes():
        for restaurante_uni in Restaurante.restaurantes:
            print(f'{restaurante_uni.nome} |{restaurante_uni.categoria} |{restaurante_uni.ativo}')

    
restaurante_praca = Restaurante('Praça lanches', 'fastfood')
restaurante_pizza = Restaurante('Pizaria', 'Italiana')


Restaurante.listar_restaurantes()
