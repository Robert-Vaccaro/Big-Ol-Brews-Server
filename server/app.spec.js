
const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 containing "Howdy, boilerplate"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Howdy, boilerplate')
  })
})
