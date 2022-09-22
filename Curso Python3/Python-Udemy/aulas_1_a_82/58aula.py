lista1 = [10, 20, 30, 40, 50]
lista2 = [10, 20, 60, 70]

num1 = set(lista1)
num2 = set(lista2)

print(num1 | num2) # union

print(num1 - num2) # Difference

print(num1 ^ num2) # Symetric Difference

print (num1 & num2) # and

print(len(num1))
