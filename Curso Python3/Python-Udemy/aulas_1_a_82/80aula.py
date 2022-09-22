#criar a classe
class Funcionarios:
  
  def __init__(self, nome, sobrenome, data_nasc):
    self.nome = nome
    self.sobrenome = sobrenome
    self.data_nasc = data_nasc
  
    


#criar o objeto
usuario1 = Funcionarios('Elena', 'Cabral', '12/01/2009')
usuario2 = Funcionarios('Carol', 'silva', '15/10/2005')
usuario3 = Funcionarios('Andre', 'andrade', '11/11/2004')


#print
print(usuario1.nome)
print(usuario2.nome)
print(usuario3.sobrenome)