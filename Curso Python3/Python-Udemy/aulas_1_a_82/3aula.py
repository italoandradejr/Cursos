# logical operators (operadores logícos)

renda_acima_5mil = True
nome_limpo = False

if renda_acima_5mil and nome_limpo:
    print('financiamento aprovado')
else:
    print('financiamento negado')



if renda_acima_5mil or nome_limpo:
    print('financiamento aprovado')
else:
    print('financiamento negado')
