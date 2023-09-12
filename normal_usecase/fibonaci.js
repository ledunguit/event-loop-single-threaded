const getFibonaciNumber = (num) => {
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    else {
        return getFibonaciNumber(num - 1) + getFibonaciNumber(num - 2);
    }
}

exports.getFibonaciNumber = getFibonaciNumber;
