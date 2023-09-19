const validator = require('./validator');

describe('Testing the validator middleware', () => {

  test('Calls the next function with an error when "name" is missing', () => {
    const req = {
      query: {}  // missing "name" query parameter
    };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith({ code: 400, message: 'Name is required in the query!' });
  });

  test('Calls the next function without arguments when "name" is provided', () => {
    const req = {
      query: {
        name: "testName"
      }
    };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

});