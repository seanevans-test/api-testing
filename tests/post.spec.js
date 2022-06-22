const app = require('../src/app');
const request = require('supertest');
const expect = require('chai');

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