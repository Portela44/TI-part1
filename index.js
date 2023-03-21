const divisible = (num1, num2) => {
    return num1%num2 === 0
}

const firstInUpper = wordArr => {
    let resultArr
    wordArr.forEach(word => resultArr.push(word[0].toUpperCase()))
    return resultArr
}

const mediana = numArr => {
    return numArr.reduce((acc,curr) => acc + curr, 0)/numArr.length;
}

const old = peopleArr => {
    let resultArr;
    peopleArr.forEach(person => {
        if(person.edad >= 18) {
            resultArr.push({nombre: person.name})
        }
        return resultArr
    })
}

const inOrder = numArr => {
    const switchNumbers = numArr => {
        for(let i = 0; i < numArr.length-1; i++) {
            if(numArr[i] > numArr[i+1]) {

            }
        }
    }
}

const moda = numArr => {
    let modaNumber
    let modaRepetition
    for(let i =0; i<numArr.length; i++) {
        if(numArr.filter(num => num === numArr[i]).length > modaRepetition) {
            modaRepetition = numArr.filter(num => num === numArr[i]).length
            modaNumber = numArr[i]
        }
    }
    return modaNumber
}

const wordRepeat = stringExample => {
    return stringExample.split("").filter(letter=> letter.toLowerCase("a")).join().length;
}