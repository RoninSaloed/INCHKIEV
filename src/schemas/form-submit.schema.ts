import { isCyrillic, isUkrainianPhoneNumber } from '@/components/helpers/helpers'
import { USER_INFO_FIELDS } from '@/domain-fields.ts/fields'
import * as zod from 'zod'

const cyrillicRequiredString = zod.string().superRefine((val, ctx) => {
  if (!val) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      message: 'Обов`язкове поле для заповнення'
    })
  } else if (!isCyrillic(val)) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      message: 'Використовуйте кирилицю'
    })
  }
})

const cyrillicOptionalString = zod
  .string()
  .optional()
  .refine((val) => !val || isCyrillic(val), {
    message: 'Використовуйте кирилицю'
  })

const phoneNumberSchema = zod
  .string()
  .min(1, { message: 'Обов`язкове поле для заповнення' })
  .refine(isUkrainianPhoneNumber, { message: 'Неправильний формат номера телефону' })

const indexSchema = zod
  .string()
  .regex(/^\d+$/, {
    message: 'Індекс повинен містити тільки цифри'
  })
  .optional()

const formSubmitSchema = zod.object({
  [USER_INFO_FIELDS.LAST_NAME]: cyrillicRequiredString,
  [USER_INFO_FIELDS.NAME]: cyrillicRequiredString,
  [USER_INFO_FIELDS.ORGANIZATION]: cyrillicOptionalString,
  [USER_INFO_FIELDS.ROLE]: zod.string().optional(),
  [USER_INFO_FIELDS.THEME]: cyrillicOptionalString,
  [USER_INFO_FIELDS.MESSAGE]: cyrillicRequiredString,
  [USER_INFO_FIELDS.EMAIL]: zod
    .string()
    .min(1, { message: 'Обов`язкове поле для заповнення' })
    .email({ message: 'Неправильний формат електронної пошти' }),
  [USER_INFO_FIELDS.COUNTRY]: cyrillicOptionalString,
  [USER_INFO_FIELDS.CITY]: cyrillicOptionalString,
  [USER_INFO_FIELDS.INDEX]: indexSchema,
  [USER_INFO_FIELDS.ADDRESS]: zod.string().optional(),
  [USER_INFO_FIELDS.TELEPHONE]: phoneNumberSchema
})

export default formSubmitSchema
