function primeNumbers(start, end) {
    if(start < end) {
        let primeNumbers = [],
			x = 0;

        while(start <= end) {
            if(isPrimeNumber(start)) {
                primeNumbers[x] = start;
                ++x;
            }

            ++start;
        }

        if(x > 0) {
            return primeNumbers;
        }
    }

    return false;
}

function isPrimeNumber(number) {
    if(number > 1) {
        if(number < 4 || number === 5 || number === 7) {
            return true;
        }

        if(number % 2 !== 0 || number % 3 !== 0 || number % 5 !== 0 || number % 7 !== 0) {
            return true;
        }
    }

    return false;
}

function naturalNumbers(start, end) {
    if(start < end) {
        let naturalNumbers= [],
            x = 0;

        while(start <= end) {
            if(isNaturalNumber(start)) {
                naturalNumbers[x] = start;
                ++x;
            }

            ++start;
        }

        if(x > 0) {
            return naturalNumbers;
        }
    }

    return false;
}

function isNaturalNumber(number) {
    if(number > 0) {
        return true;
    }

    return false;
}

