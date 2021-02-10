import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email'

describe('EmailValidation', () => {
  test('should return error emai is invalid', async () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
