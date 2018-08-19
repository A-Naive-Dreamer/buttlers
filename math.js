Buttlers.prototype.math = {
    primeNumbers(numbers, start = 0, end = 0) {
        if (Array.isArray(numbers) && numbers.length > 0) {
            return numbers.filter(this.isPrimeNumber);
        } else {
            start = parseInt(start);
            end = parseInt(end);

            if (start < end) {
                let primeNumbers = [],
                    x = 0;

                while (start <= end) {
                    if (this.isPrimeNumber(start)) {
                        primeNumbers[x] = start;
                        ++x;
                    }

                    ++start;
                }

                if (x > 0) {
                    return primeNumbers;
                }
            }
        }

        return false;
    },
    isPrimeNumber(number) {
        number = parseInt(number);

        if (number > 1) {
            if (number < 4 || number === 5 || number === 7) {
                return true;
            }

            if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
                return false;
            } else {
                return true;
            }
        }

        return false;
    },
    naturalNumbers(numbers, start, end) {
        if (Array.isArray(numbers) && numbers.length > 0) {
            return numbers.filter(this.isNaturalNumber);
        } else {
            start = parseInt(start);
            end = parseInt(end);

            if (start < end) {
                let naturalNumbers = [],
                    x = 0;

                while (start <= end) {
                    if (this.isNaturalNumber(start)) {
                        naturalNumbers[x] = start;
                        ++x;
                    }

                    ++start;
                }

                if (x > 0) {
                    return naturalNumbers;
                }
            }
        }

        return false;
    },
    isNaturalNumber(number) {
        number = parseInt(number);

        if (number > 0) {
            return true;
        }

        return false;
    }
}
