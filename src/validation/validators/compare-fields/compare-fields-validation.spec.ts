import faker from 'faker'
import { CompareFieldsValidation } from '@/validation/validators'
import { InvalidFieldError } from '@/validation/errors'

const makeSut = (valueToCompare: string): CompareFieldsValidation => new CompareFieldsValidation(faker.database.column(), valueToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return false if compare is valid', () => {
    const valuToCompare = faker.random.word()
    const sut = makeSut(valuToCompare)
    const error = sut.validate(valuToCompare)
    expect(error).toBeFalsy()
  })
})
