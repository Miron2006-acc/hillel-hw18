
//1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//2
const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const grivnas = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${grivnas} гривень`);
}

//3
const N = /* ваше ціле число */;
for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        console.log(i);
    }
}

//4
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const numberToCheck = /* ваше ціле число */;
if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} є простим числом`);
} else {
    console.log(`${numberToCheck} не є простим числом`);
}

//5
function canBeExpressedAsPowerOf3(number) {
    while (number > 1) {
        if (number % 3 !== 0) {
            return false;
        }
        number /= 3;
    }
    return number === 1;
}

const numberToCheck = /* ваше число */;
if (canBeExpressedAsPowerOf3(numberToCheck)) {
    console.log(`${numberToCheck} можна отримати з числа 3 піднесеним до деякого ступеня`);
} else {
    console.log(`${numberToCheck} не можна отримати з числа 3 піднесеним до деякого ступеня`);
}
