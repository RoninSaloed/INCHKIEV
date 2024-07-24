import { USER_INFO_FIELDS } from '@/domain-fields.ts/fields'
import * as zod from 'zod'

export const formSubmitSchema = zod.object({
  [USER_INFO_FIELDS.LAST_NAME]: zod.string().min(1, { message: 'required' }),
  [USER_INFO_FIELDS.NAME]: zod.string().min(1, { message: 'required' }),
  [USER_INFO_FIELDS.ORGANIZATION]: zod.string().optional()
})
