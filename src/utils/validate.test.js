import { checkValidData } from './validate';

describe('checkValidData', () => {
  it('should return null for valid email and valid password', () => {
    expect(checkValidData('test@example.com', 'Password123!')).toBeNull();
  });

  describe('Email Validation', () => {
    it('should return error for missing domain', () => {
      expect(checkValidData('test@', 'Password123!')).toBe('Email ID is not valid');
    });

    it('should return error for missing @ symbol', () => {
      expect(checkValidData('testexample.com', 'Password123!')).toBe('Email ID is not valid');
    });

    it('should return error for invalid domain extension', () => {
      expect(checkValidData('test@example.c', 'Password123!')).toBe('Email ID is not valid');
    });

    it('should return error for empty email', () => {
      expect(checkValidData('', 'Password123!')).toBe('Email ID is not valid');
    });
  });

  describe('Password Validation', () => {
    const validEmail = 'test@example.com';

    it('should return error for password shorter than 8 characters', () => {
      expect(checkValidData(validEmail, 'Pass1!')).toBe('Password is not valid');
    });

    it('should return error for password without uppercase letter', () => {
      expect(checkValidData(validEmail, 'password123!')).toBe('Password is not valid');
    });

    it('should return error for password without lowercase letter', () => {
      expect(checkValidData(validEmail, 'PASSWORD123!')).toBe('Password is not valid');
    });

    it('should return error for password without digit', () => {
      expect(checkValidData(validEmail, 'Password!')).toBe('Password is not valid');
    });

    it('should return error for password without special character', () => {
      expect(checkValidData(validEmail, 'Password123')).toBe('Password is not valid');
    });

    it('should return error for empty password', () => {
      expect(checkValidData(validEmail, '')).toBe('Password is not valid');
    });
  });
});
