<template>
  <div :class="{ [customClass]: true }">
    <div class="flex">
      <div class="mr-10">
        <span
          data-testid="input-label"
          v-if="label"
          class="mb-2 block text-xs text-dark-blue dark:text-dark-white"
          >{{ label }}</span
        >
        <input
          v-model="modelValue"
          :type="type"
          :placeholder="placeholder"
          :class="{
            'focus:shadow-outline w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:outline-none': true,
            [inputClass]: true
          }"
        />
      </div>
    </div>
    <span v-show="errorMessage" class="text-red-500">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs, watchEffect } from 'vue'

export interface EditableTextInputProps {
  placeholder?: string
  type?: string
  errorMessage?: string
  customClass?: string
  label: string
  inputClass: string
}

const props = withDefaults(defineProps<EditableTextInputProps>(), {
  isDisabled: false,
  isBottomBorder: true,
  type: 'text',
  errorMessage: '',
  placeholder: '',
  customClass: '',
  inputClass: ''
})

const modelValue = defineModel<string | null>({ default: '' })

const { placeholder } = toRefs(props)
</script>
