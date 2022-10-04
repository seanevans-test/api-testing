const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('response', () =>{
    it('json response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.body.id).to.be.equal('1');
            })
    });
});