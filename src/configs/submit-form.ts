import { CHECKBOX_INFO_FIELDS, USER_INFO_FIELDS } from '@/domain-fields.ts/fields'
import type { CheckboxField, FieldConfig } from '@/types/submitform.types'

export const userInfoInputs: FieldConfig[] = [
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

export const userContactInfoInputs: FieldConfig[] = [
  {
    name: USER_INFO_FIELDS.EMAIL,
    label: '*EMAIL',
    placeholder: 'Ваш email',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.COUNTRY,
    label: 'Країна',
    placeholder: 'Країна проживання',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.CITY,
    label: 'Місто',
    placeholder: 'Місто проживання',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.INDEX,
    label: 'ІНДЕКС',
    placeholder: 'Індекс міста',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.ADDRESS,
    label: 'Адреса',
    placeholder: 'Адреса проживання',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.TELEPHONE,
    label: '*Телефон',
    placeholder: '+38 (___) ___-__-__',
    type: 'string'
  }
]

export const checkboxConfig: CheckboxField[] = [
  {
    value: CHECKBOX_INFO_FIELDS.PATIENT,
    label: 'Споживач'
  },
  {
    value: CHECKBOX_INFO_FIELDS.DOCTOR,
    label: 'Медичний працівник'
  },
  {
    value: CHECKBOX_INFO_FIELDS.JOURNALIST,
    label: 'Журналіст'
  }
]

export const userMessageConfig: FieldConfig[] = [
  {
    name: USER_INFO_FIELDS.THEME,
    label: 'Тема',
    placeholder: 'Впишіть тему',
    type: 'string'
  },
  {
    name: USER_INFO_FIELDS.MESSAGE,
    label: '*Повідомлення',
    placeholder: 'Впишіть повідомлення',
    type: 'string'
  }
]

export const userInfoInputsValues = {
  lastName: '',
  name: '',
  organization: ','
}
