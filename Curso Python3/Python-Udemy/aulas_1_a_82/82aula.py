from datetime import datetime

#criar a classe
class Funcionarios:
  
  def __init__(self, nome, sobrenome, ano_nasc):
    self.nome = nome
    self.sobrenome = sobrenome
    self.ano_nasc = ano_nasc

  def nome_completo(self):
    return self.nome + ' ' + self.sobrenome

  def idade_funcionario(self):
    ano_atual = datetime.now().year
    self.ano_nasc = int(ano_atual - self.ano_nasc)
    return self.ano_nasc
    
    


#criar o objeto
usuario1 = Funcionarios('Elena', 'Cabral', 2009)
usuario2 = Funcionarios('Carol', 'silva', 2005)
usuario3 = Funcionarios('Andre', 'andrade', 2003)


#print
print(Funcionarios.idade_funcionario(usuario1))