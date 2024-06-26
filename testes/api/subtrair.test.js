const app = require('../../index');
const request = require('supertest');

describe('Teste de API para subtração', () => {

    test('POST /api/subtrair - deve subtrair dois números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 20, num2: 7 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 13 });
    });

    test('POST /api/subtrair - deve retornar erro 400 se num1 não for um número', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 'vinte', num2: 8 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser numéricos' });
    });

    test('POST /api/subtrair - deve retornar erro 400 se num2 não for informado', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 10 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' });
    });

    test('POST /api/subtrair - deve retornar erro 400 se num1 não for informado', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num2: 5 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' });
    });
});
