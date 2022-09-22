#criar a classe
class Funcionarios:
  
  def __init__(self, nome, sobrenome, data_nasc):
    self.nome = nome
    self.sobrenome = sobrenome
    self.data_nasc = data_nasc

  def nome_completo(self):
    return self.nome + ' ' + self.sobrenome
  
    


#criar o objeto
usuario1 = Funcionarios('Elena', 'Cabral', '12/01/2009')
usuario2 = Funcionarios('Carol', 'silva', '15/10/2005')
usuario3 = Funcionarios('Andre', 'andrade', '11/11/2004')


#print
print(usuario1.nome_completo())

print(Funcionarios.nome_completo(usuario1))
