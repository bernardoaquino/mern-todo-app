const request = require('supertest');
const { app } = require('../src/index');

let token;

beforeEach(() => {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NTczOTM1NX0.JQOSCu9tNwxdJd4tPe-ZiBtMZl8yPuCiQ3OM5b_1ruA';
});

describe('login', () => {
  describe('login route', () => {
    describe('if login correct', () => {
      it('should return 200', async () => {
        const response = await request(app).post('/login').send({
          password: 'abc',
        });
        expect(response.statusCode).toBe(200);
      });
    });

    describe('if login incorrect', () => {
      it('should return 401', async () => {
        const response = await request(app).post('/login').send({
          password: 'abcd',
        });

        expect(response.statusCode).toBe(401);
      });
    });
  });
});

describe('todo', () => {
  describe('get todos route', () => {
    describe('if todos does not exists', () => {
      it('should return 200, but empty array', async () => {
        const response = await request(app)
          .get('/todos')
          .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200, []);
      });
    });

    describe('if not authenticated', () => {
      it('should return 401', async () => {
        const response = await request(app).get('/todos');
        expect(response.statusCode).toBe(401);
      });
    });

    describe('if not authenticated (incorrect token)', () => {
      it('should return 401', async () => {
        const response = await request(app)
          .get('/todos')
          .set('Authorization', `Bearer ${token}a`);
        expect(response.statusCode).toBe(401);
      });
    });
  });
});
