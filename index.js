//Número 2
function fibonacci(number) {
    let fibo1 = 0
    let fibo2 = 1
    let fibon = 0

    console.log(fibo1)
    console.log(fibo2)

    while( fibon < number) {
        fibon = fibo1 + fibo2

        if(fibon - fibo2 === fibo1) {
            console.log(fibon)
        } else {
            console.log('O número ' + fibon + ' não faz parte da sequencia de fibonacci')
        }

        fibo1 = fibo2
        fibo2 = fibon
    }
}

fibonacci(10)
