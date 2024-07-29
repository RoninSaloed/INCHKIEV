<template>
  <div :class="{ relative: true, [customClass]: true }">
    <div class="flex">
      <div class="mr-10">
        <span v-if="label" class="block text-xs mb-[5px] uppercase text-black">{{ label }}</span>
        <input
          v-model="modelValue"
          :type="type"
          :placeholder="placeholder"
          :class="{
            'focus:shadow-outline text-xs appearance-none rounded-sm border border-black h-[31px] w-[246px] px-3 py-2 leading-tight focus:outline-none': true,
            [inputClass]: true
          }"
        />
      </div>
    </div>
    <span v-show="errorMessage" class="text-red-500 absolute">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

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
