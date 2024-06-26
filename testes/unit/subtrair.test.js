const Service = require('../../src/services/service');

describe('Teste de multiplicação', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    });

    test('Deve multiplicar dois valores', () => {
        const result = service.Multiplicar(2, 2);
        expect(result).toBe(4);
    });

    test('Deve lançar um erro se o primeiro valor não for fornecido', () => {
        const result = () => service.Multiplicar(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve lançar um erro se o segundo valor não for fornecido', () => {
        const result = () => service.Multiplicar(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve lançar um erro se o primeiro valor não for um número', () => {
        expect(() => service.Multiplicar('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });
});
