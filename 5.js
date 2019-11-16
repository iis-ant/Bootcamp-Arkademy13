function createMatrix(dimensi) {
    var matrix ="";
    for(var i=0; i<dimensi*dimensi; i++){
        matrix+=Math.floor(Math.random() * 9)
        if(matrix.length === 3 || matrix.length === 7 || matrix.length === 11){
            matrix+='\n'
        }
    }

    var diagonal1= Number(matrix[0]) + Number(matrix[5]) + Number(matrix[10])
    var diagonal2 = Number(matrix[2]) + Number(matrix[5]) + Number(matrix[8])
    var result = diagonal1+diagonal2

    console.log(matrix +'\n')
    console.log('Total: '+ result)
}

createMatrix(3)