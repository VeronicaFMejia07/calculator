import { useRef, useState } from "react";

//crea una enumeracion, sirve para manipular los datos facilmente, se define la representación
enum Operadores{
    add, subtract, multiply, split
} 

export const useCalculator = () => {
  
    const [numPrevious, setNumPrevious] = useState('0');
    const [num, setNum] = useState('0');


    //useRef se utiliza cuando no se necesite que el componente vuelva a renderizarse
    const lastOperation = useRef<Operadores>();

    const clean = () => {
        setNum('0'),
        setNumPrevious('0')
    }

    const showNumber = (numEntry: string) => {

        //si ya existe un punto decimal ., el includes determina si una matriz incluye un valor determinado, recibe el valor a buscar y el indice en que va comenzar la busqueda, devuelve true o false
        if (num.includes('.') && numEntry === '.') return;

        //StartsWidth determina si una cadena comienza con el caracter especificado, recibe el caracter y la posición, devuelve true o false
        if (num.startsWith('0') || num.startsWith('-0')) {
            //punto decimal
            if (numEntry === '.') {
                setNum(num + numEntry)

                //si es otro 0 y si incluye un punto
            } else if (numEntry === '0' && num.includes('.')) {
                setNum(num + numEntry)

                //numero diferente a 0 y no tiene un punto
            } else if (numEntry !== '0' && !num.includes('.')) {
                setNum(numEntry)

                //evitar el 0000000 como valor de entrada
            } else if (numEntry === '0' && num.includes('0')) {
                setNum(num)
            }
        } else {
            setNum(num + numEntry)
        }
    }

    const positiveNegative = () => {
        if (num.includes('-')) {
            setNum(num.replace('-', '')) //num positive
        } else {
            setNum('-' + num) //num negative
        }
    }

    const btnDelete = () => {
        let numNegative = '';
        let numTemp = num;

        //evalua si el numero es negativo
        if (num.includes('-')) {
            numNegative = '-';
            numTemp = num.slice(1);  //asigna la primera posición del numero
        } 
        //evalua si el tamaño del numero es mayor a 1
        if (numTemp.length > 1) {
            const resultNum = numTemp.slice(0,-1) //se indica que empiece desde la posicion 0 y corte la ultima posicion del numero
            setNum(numNegative + resultNum) //si es negativo concatena el signo y el resultado del numero
        } else { //Si el tamaño del numero es menor a 1 setea el estado en 0
            setNum('0')
        }
    }

    const changeToPreviousNum = () =>{
        //evalua si el numero actual termina con punto
        if(num.endsWith('.')){
            let currentNum = num.slice(0,-1) //empiece desde la posicion 0 y corte la ultima posicion del numero que es el punto
            setNumPrevious(currentNum);
        }else{
            setNumPrevious(num)
        }
        setNum('0')
    }

    const splitButton = () => {
        changeToPreviousNum();
        //el valor actual de la referencia va ser division que se toma de la enumeración
        lastOperation.current = Operadores.split;
    }
    const multiplyButton = () => {
        changeToPreviousNum();
        lastOperation.current = Operadores.multiply;
    }
    const subtractButton = () => {
        changeToPreviousNum();
        lastOperation.current = Operadores.subtract;
    }
    const addButton = () => {
        changeToPreviousNum();
        lastOperation.current = Operadores.add;
    }

    const calculate = () => {
        //convierte el num que es string a un tipo number
        const num1 = Number(num); 
        const num2= Number(numPrevious);
        const {add,subtract,multiply,split} = Operadores;

        switch(lastOperation.current){
            case add:
                setNum(`${ num1 + num2 }`);
            break;
            case subtract:
                setNum(`${ num2 - num1 }`);
            break;
            case multiply:
                setNum(`${ num1 * num2 }`);
            break;
            case split:
                setNum(`${ num2 / num1 }`);
            break;
            default: break;
        }

        setNumPrevious('0')
    }
    
    return {
        num, 
        numPrevious,
        clean,
        positiveNegative,
        btnDelete,
        splitButton,
        showNumber,
        multiplyButton,
        subtractButton,
        addButton,
        calculate
    }

}


