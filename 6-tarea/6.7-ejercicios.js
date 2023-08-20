//Dado el siguiente arreglo [1, 45, 23, 40, 12, 33, 290] imprimir todos los numeros divisibles entre 3. Se recomienda resolverlo tanto con while como con for
numeros =  [1, 45, 23, 40, 12, 33, 290];

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 === 0) {
    console.log(numeros[i]);
  }
}