from modelos.avaliacao import Avaliacao

class Restaurante:
    restaurantes = []

    def __init__(self, nome, categoria): # construtor (self expecifica que os argumentos referenciao ao construtor(pode ser qualquer nome))
        self._nome = nome.upper()
        self._categoria = categoria.upper()
        self._ativo = False
        self._avaliacao = [] # lista
        Restaurante.restaurantes.append(self)

    
    def __str__(self): # self é a referencia atual da instancia que esta sendo chamada no momento
        """Retorna uma representação em string do restaurante."""
        return f'{self._nome} | {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        """Exibe uma lista formatada de todos os restaurantes."""
        print(f'{'Nome do restaurante'.ljust(25)} | {'Categoria'.ljust(25)} |{'Avaliação'.ljust(25)} | {'Status'}')
        for restaurante_uni in cls.restaurantes:
            print(f'{restaurante_uni._nome.ljust(25)} | {restaurante_uni._categoria.ljust(25)} | {str(restaurante_uni.media_avaliacoes).ljust(24)} | {restaurante_uni.ativo}')

    @property
    def ativo(self):
        """Retorna um símbolo indicando o estado de atividade do restaurante."""
        return '⌧N' if self._ativo else '☐S'
    
    def alternar_estado(self):
        """Alterna o estado de atividade do restaurante."""
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente, nota):
        if (0 < nota <= 5):
            avaliacao = Avaliacao(cliente, nota)
            self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacao:
            return '-'
        soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)
        quantidade_de_notas = len(self._avaliacao)
        media = round(soma_das_notas / quantidade_de_notas, 1)
        return media


