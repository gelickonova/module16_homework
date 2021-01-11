const getPercents = require('./getPercents');

describe('tests for func', () => {
    it('positive case', () => {
        expect(getPercents(30, 200)).toBe(60)
    });
    it('negative cases', () => {
        const expected = 'Данные неверны';
        expect(getPercents(30, 'asd')).toBe(expected);
        expect(getPercents(30, false)).toBe(expected);
        expect(getPercents(null, 200)).toBe(expected)
        expect(getPercents(-10, 200)).toBe(expected)
    });
    it('corner case', () => {
        expect(getPercents(0, 200)).toBe(0)
    });
})
