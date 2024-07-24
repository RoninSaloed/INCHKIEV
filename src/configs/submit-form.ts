import { USER_INFO_FIELDS } from '@/domain-fields.ts/fields'
import type { FieldConfig } from '@/types/submitform.types'

export const textInputs: FieldConfig[] = [
  {
    name: USER_INFO_FIELDS.LAST_NAME,
    label: '*Прізвище',
    placeholder: 'Ваше прізвище',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.NAME,
    label: '*Ім`я',
    placeholder: 'Ваше ім`я',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.ORGANIZATION,
    label: 'Організація та посада',
    placeholder: 'Впишіть свою організацію та посаду',
    type: 'string'
  }
]
