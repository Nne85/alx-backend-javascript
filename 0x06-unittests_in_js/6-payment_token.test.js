// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with correct object when success is true', () => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Verify that the result is the expected object
        expect(result).to.equal({ data: 'Successful response from the API' });

        // Call done to signal the end of the async test
        done();
      })
      })
  });
