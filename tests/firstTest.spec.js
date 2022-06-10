const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

describe('First test', () => {

    function appTest(url, body) {
       app.get(url, (err, res) => {
           res.status(200).json(body);
       });
    }

   it('OK response', () => {
      const url = '/first';
      const body = {"ok": "response"};

      appTest(url, body);

      request(app).get(url).end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
      });
   });

   it('Mocky OK response', (done) => {
      const url = '/v3/5cd52f67-8343-4732-96af-77bf994e2eb5';
      const body = {"first": "test"};

      appTest(url, body);
      request(app).get(url).expect(200, done);
   });
});