import { RequiredFieldValidation } from '@/validation'
import { RequiredFieldError } from '@/validation/errors'

describe('', () => {
  test('should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
