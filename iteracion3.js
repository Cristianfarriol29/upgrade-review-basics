
const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {

    array.forEach(element => {

        if(text === element){
    console.log(`La palabra introducida esta en el index ${array.indexOf(element)}`)
    }

    })
        


}

findArrayIndex(array, "Ajolote")