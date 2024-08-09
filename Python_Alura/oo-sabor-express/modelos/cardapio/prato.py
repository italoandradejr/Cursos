from modelos.cardapio.item_cardapio import ItemCardapio

class Prato(ItemCardapio):
    def __init__(self, nome, preco, descricao):
        super().__init__(nome, preco) # super permite acessar itens de uma outra classe
        self.descricao = descricao


    def __str__(self): #cria uma representação de texto
        return self._nome 
    
    def aplicar_desconto(self):
        self._preco -= (self._preco * 0.08)