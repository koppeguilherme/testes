const Service = require('../../src/services/service');

describe('Teste de divisão', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    });

    test('Deve lançar um erro se o primeiro valor não for um número', () => {
        expect(() => service.Dividir('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });

    test('Deve lançar um erro se o segundo valor não for fornecido', () => {
        const result = () => service.Dividir(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve lançar um erro se o primeiro valor não for fornecido', () => {
        const result = () => service.Dividir(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve dividir dois valores', () => {
        const result = service.Dividir(10, 2);
        expect(result).toBe(5);
    });
});
