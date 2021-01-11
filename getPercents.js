function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number' || isNaN(percent) || isNaN(number) || percent < 0)
        return 'Данные неверны'
    return number / 100 * percent;
}

module.exports = getPercents;
