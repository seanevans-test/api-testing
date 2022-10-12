const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
    beforeEach(() => {
        nock('http://localhost:4000')
            .get('/users')
            .reply(200, {
                "users": ({ "id": "1"})
            });
        });
})