<template>
  <div class="flex justify-center mt-56">
    <form @submit.prevent="submit">
      <div class="flex-col">
        <text-input
          v-for="(item, idx) in textInputs"
          :key="idx"
          :error-message="errors[item.name as keyof typeof errors]"
          :label="item.label"
          :type="item.type"
          custom-class="mb-4"
          :placeholder="item.placeholder"
          v-model="values[item.name as keyof typeof values]"
        />
      </div>
      <button html-type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { textInputs } from '@/configs/submit-form'
import { formSubmitSchema } from '@/schemas/form-submit.schema'
import TextInput from '@shared/TextInput.vue'

import { computed, reactive, ref } from 'vue'

const schema = formSubmitSchema
const initialValue = {
  lastName: '',
  name: '',
  organization: ''
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
</script>
