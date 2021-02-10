import faker from 'faker'
import { RequiredFieldValidation } from '@/validation'
import { RequiredFieldError } from '@/validation/errors'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.database.column())

describe('', () => {
  test('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return false if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
