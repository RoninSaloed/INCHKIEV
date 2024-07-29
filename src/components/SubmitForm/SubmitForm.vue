<template>
  <div class="flex justify-center">
    <div class="w-[635px] mt-56">
      <form @submit.prevent="submit" class="flex justify-around text-xs">
        <div>
          <div class="flex-col">
            <text-input
              v-for="(item, idx) of userInfoInputs"
              :key="idx"
              :error-message="errors[item.name]"
              :label="item.label"
              :type="item.type"
              custom-class="mb-[25px]"
              :placeholder="item.placeholder"
              v-model="values[item.name as keyof typeof userInfoInputsValues]"
            />
          </div>
          <div>
            <div v-for="(item, idx) of checkboxConfig" :key="idx" class="flex">
              <input
                type="radio"
                v-model="values.role"
                :value="item.value"
                class="mr-[6px] mb-[10px] uppercase"
              />
              <div>{{ item.label }}</div>
            </div>
          </div>
          <div class="text-lg mt-6 mb-[18px]">{{ 'ПОВІДОМЛЕННЯ' }}</div>
          <div>
            <text-input
              :error-message="errors[USER_INFO_FIELDS.THEME]"
              :label="userMessageConfig[0].label"
              :type="userMessageConfig[0].type"
              custom-class="mb-4"
              :placeholder="userMessageConfig[0].placeholder"
              v-model="values.theme"
            />
            <span class="uppercase">{{ userMessageConfig[1].label }}</span>

            <div
              :class="{
                'h-[85px] relative w-[246px] appearance-none rounded-sm border  text-black  bg-transparent px-3 py-2 leading-tight focus:outline-none mt-[22px]': true,
                'border-black': !errors[USER_INFO_FIELDS.MESSAGE],
                'border-red-500': !!errors[USER_INFO_FIELDS.MESSAGE]
              }"
            >
              <textarea
                :class="{
                  'mb-2 h-[85px] w-[246px] resize-none overflow-y-auto rounded  bg-transparent  focus:outline-none ': true
                }"
                :placeholder="userMessageConfig[1].placeholder"
                v-model="values.message"
              ></textarea>
            </div>
            <span class="text-red-600 absolute" v-if="errors[USER_INFO_FIELDS.MESSAGE]">{{
              errors[USER_INFO_FIELDS.MESSAGE]
            }}</span>
          </div>
        </div>
        <div>
          <text-input
            v-for="(item, idx) of userContactInfoInputs"
            :key="idx"
            :error-message="errors[item.name]"
            :label="item.label"
            :type="item.type"
            custom-class="mb-[25px]"
            :placeholder="item.placeholder"
            v-model="values[item.name as keyof typeof userInfoInputsValues]"
          />
          <sc-btn
            name="відправити"
            html-type="submit"
            buttonClass="uppercase bg-black w-[246px] h-[31px] text-white mt-16"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  userInfoInputs,
  checkboxConfig,
  userInfoInputsValues,
  userMessageConfig,
  userContactInfoInputs
} from '@/configs/submit-form'
import formSubmitSchema from '@/schemas/form-submit.schema'
import TextInput from '@shared/TextInput.vue'
import ScBtn from '@shared/ScBtn.vue'
import type * as zod from 'zod'
import { USER_INFO_FIELDS } from '@/domain-fields.ts/fields'

import { computed, reactive, ref, watchEffect } from 'vue'
type FormType = zod.infer<typeof formSubmitSchema>

const schema = formSubmitSchema
const initialValue: FormType = {
  lastName: '',
  name: '',
  organization: '',
  role: '',
  theme: '',
  message: '',
  email: '',
  country: '',
  city: '',
  index: '',
  address: '',
  telephone: ''
}
const values = reactive({ ...initialValue })

const isValid = ref<boolean>(true)
const isInvalid = computed(() => !isValid.value)
const dirty = ref<boolean>(false)
const errors = reactive({} as Record<keyof string, string>) as Record<string, string>

const resetForm = (): void => {
  Object.assign(form.values, initialValue)
}

const form = reactive({
  values,
  dirty,
  isValid,
  isInvalid,
  errors,
  reset: resetForm
})

const resetErrors = (): void => {
  for (const key in errors) {
    errors[key] = ''
  }
}

const validate = (): void => {
  if (!schema) {
    isValid.value = true
    return
  }

  const validationResult = schema.safeParse(form.values)
  if (validationResult.success) {
    isValid.value = true

    for (const key in errors) {
      errors[key] = ''
    }
    return
  }

  const { errors: zodErrors } = validationResult.error
  for (const error of zodErrors) {
    const { message, path } = error
    const fieldName = path.join('.')
    errors[fieldName] = message
  }

  isValid.value = false
}

const submit = (): void => {
  resetErrors()
  validate()

  if (!isValid.value) {
    return
  }

  submitCallback(values)
}

const submitCallback = (values: any) => {
  alert('Відправлено')
}

watchEffect(() => {
  console.log(form.values)
})
</script>
