import numpy as np
import matplotlib.pyplot as plt

url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'

dados = np.loadtxt(url, delimiter=',', usecols=np.arange(1, 88, 1))


#print(dados)

qta_dimensao = dados.ndim
qta_dados = dados.size
qta_linha_coluna = dados.shape # trás quantos linhas e colunas tem
dado_transposto = dados.T
#print(qta_linha_coluna)


#print("----------------------------------------------------------------------------")
datas = dado_transposto[:,0]
precos = dado_transposto[:,1:6]

#plt.plot(datas, precos[:,0])
#plt.show()


Moscow = precos[:,0]
Kaliningrad = precos[:,1]
Petersburg = precos[:,2]
Krasnodar = precos[:,3]
Ekaterinburg = precos[:,4]

Moscow_ano1 = Moscow[0:12] 
Moscow_ano2 = Moscow[12:24]
Moscow_ano3 = Moscow[24:36]
Moscow_ano4 = Moscow[36:48]

plt.plot(np. arange(1,13,1), Moscow_ano1)
plt.plot(np. arange(1,13,1), Moscow_ano2)
plt.plot(np. arange(1,13,1), Moscow_ano3)
plt.plot(np. arange(1,13,1), Moscow_ano4)
plt.legend(['ano1','ano2','ano3','ano4'])
#plt.show()

diferenca = np.array_equal(Moscow_ano3, Moscow_ano4) #verifica se os arays são iguais
print(diferenca)

np.allclose(Moscow_ano3, Moscow_ano4,10)

