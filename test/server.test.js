const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server.js');

describe('GET /products', () => {
    it('should return an array of beers', () => {
        return request(app)
          .get('/products')
          .expect(200)
          .expect('Content-Type', /json/)
        })
    });
    

describe('GET /products/:id', () => {
    it('should return an array of beer IDs', () => {
        return request(app)
          .get('/products/:id')
          .expect(200)
          .expect('Content-Type', /json/)
        })
    });
    
