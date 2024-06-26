const app = require('../../index');
const request = require('supertest');

describe('Teste de API para dividir', () => {

    test('POST /api/dividir - deve retornar erro 400 se num1 não for um número', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 'vinte', num2: 10 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser numéricos' });
    });

    test('POST /api/dividir - deve retornar erro 400 se num2 não for informado', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 20 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' });
    });

    test('POST /api/dividir - deve retornar erro 400 se num1 não for informado', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num2: 8 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' });
    });

    test('POST /api/dividir - deve dividir dois números', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 15, num2: 3 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 5 });
    });
});
