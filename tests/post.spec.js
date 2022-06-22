const app = require('../src/app');
const request = require('supertest');
var expect = require('chai').expect

describe('Post requests', () => {
    it('json response', () => {
        request(app)
            .post('/course')
            .send({"name":"supertest" })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.name).to.be.equal('supertest');
            })
    });
})