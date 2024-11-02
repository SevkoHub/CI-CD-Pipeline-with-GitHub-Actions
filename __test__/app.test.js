const request = require('supertest');
const app = require('../app'); // Import your Express app
let server;

beforeAll(() => {
  // Start the server before running any tests
  server = app.listen(3000);
});

afterAll((done) => {
  // Close the server after all tests are completed
  server.close(done);
});

describe('GET /', () => {
  it('should respond with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
