const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//listaDeChamada.splice (1,2,"Rodrigo") // 1° parâmetro, índice de inicio; 2° parâmetro, qta de elelemtos q seram retirados; 3° parâmetros, elementos que sera incluido

listaDeChamada.splice(2,0, "Rodrigo")

console.log(listaDeChamada)