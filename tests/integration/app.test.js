const request = require('supertest');
const app = require('../../src/app');

describe('Calculator API', () => {
    test('POST /calculate with add operation', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({
                operation: 'add',
                a: 2,
                b: 3
            });

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(5);
    });
});
