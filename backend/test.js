import chai from 'chai';
const expect = chai.expect;

import app from '../app.js';
import mongoose from 'mongoose';
import Review from '../public/models/review.js';

describe('Reviews API Test', () => {

  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/lep_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
  });

  after(async () => {
    await mongoose.connection.close();
  });

  describe('GET /api/other/allReview', () => {
    it('should return an array of reviews', (done) => {
      Review.create(
        {
          name: 'John Doe',
          profession: 'Engineer',
          gender: 'Male',
          comment: 'This is a test review.',
          stars: 5,
        },
        (err, review) => {
          if (err) {
            console.error(err);
            done();
          } else {
            chai
              .request(app)
              .get('/api/other/allReview')
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(1);
                expect(res.body[0].name).to.equal('John Doe');
                expect(res.body[0].profession).to.equal('Engineer');
                expect(res.body[0].gender).to.equal('Male');
                expect(res.body[0].comment).to.equal('This is a test review.');
                expect(res.body[0].stars).to.equal(5);
                done();
              });
          }
        }
      );
    });
  });

});
