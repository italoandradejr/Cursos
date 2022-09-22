# Desafio com if, elif, else

'''
Criar um progrma que dependendo da temperatura (em celsius) do steak ele retorna o ponto de cozimento em português. O usuário deverá fornecer a temperatura.

temp - cozimento
120°F ou 48°C - Rare (selada)
130°F ou 54°C - Medium rare (ao ponto para o mal)
140°F ou 60°c - Medium (ao Ponto)
150°F ou 65°C - Medium well (ao ponto par o bem)
160°F ou 71°C - well done (bem passado)
'''

temp =int(input("Digite a temperatura da carne: ")) 

if temp < 48:
  print("Deixar assar por mais alguns minutos")
  
elif temp in range(48, 53): #melhor forma
  print("Selada")
  
elif temp >= 54 and temp < 59:
  print("ao ponto para o mal")

elif temp >= 60 and temp < 64:
  print("ao Ponto")

elif temp >= 65 and temp < 70:
  print("ao ponto par o bem")

else:
  print("bem passado")
