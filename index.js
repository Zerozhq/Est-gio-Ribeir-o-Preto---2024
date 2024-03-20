//1 - resposta

let indice = 13
let soma = 0
let k = 0

for(k = 0; k < indice; k++) {

  soma +=  k 
}

console.log(soma)


//2 - fibonacci
let numA = 0
let numB = 1
let numC = 0

function fibonacci( valueA, valueB) {

  let array = []
  for(i = 0; i <= 100; i++) {
  
    numC = valueA + valueB
    valueA = valueB
    valueB = numC
    array.push(numC)
    
  }
  return array
}
const results = fibonacci(numA, numB)

const formfibonacci = document.getElementById('fibonacci__form')

const valuefibonacci = document.getElementById('fibonacci__value')

formfibonacci.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const span = document.getElementById('fibonacci__result')

  const input = valuefibonacci.value
  console.log(input)
  const includesValue = results.includes(parseFloat(input))

  if(includesValue) {
   span.innerText = `Sim, o numero ${input}`

  } else {
    span.innerText = `Não, o numero procurado não foi achado.`
  }
})

//5 - inverter string
let reverseResult = []

const form = document.getElementById('reverse__form');

const campo = document.getElementById('reverse__value');

function reverse() {
  
  const input = campo.value
  console.log(input)
}

form.addEventListener('submit', (event) =>{
  event.preventDefault()

   const input = campo.value

   let revert = []
   let reverss = []
   let total = ""  

   revert.push(...input)

   revert.forEach((element) => reverss.unshift(element) )

   reverss.forEach((element) => total+= element )
  console.log(total)

  const span = document.getElementById('reverse__result')

  span.innerText = total
 
} )



