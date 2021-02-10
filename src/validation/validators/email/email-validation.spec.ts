import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email'

describe('EmailValidation', () => {
  test('should return error emai is invalid', async () => {
    const sut = new EmailValidation(faker.internet.email())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if email is invalid', async () => {
    const sut = new EmailValidation(faker.internet.email())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
