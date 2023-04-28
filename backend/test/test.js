import app from '../app.js';
import request from 'supertest';
import { assert,expect } from 'chai';


describe('/api/find/search', () => {
    it('should return a list of employees matching the search criteria', async () => {
      // send a POST request to the endpoint with search criteria
      const searchCriteria = {
        pincode: 121212,
        skills: 'Barber'
      };
      const res = await request(app)
        .post('/api/find/search')
        .send(searchCriteria);
  
      // check the response status and body
      assert.strictEqual(res.statusCode, 200);
      expect(res.body).to.be.an('array').that.has.lengthOf(1);
      expect(res.body[0].fname).to.equal('yash');
      expect(res.body[0].skills).to.equal('Barber');
      expect(res.body[0].pincode).to.include(searchCriteria.pincode);
    });
  });