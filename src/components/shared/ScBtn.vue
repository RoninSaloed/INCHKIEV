<template>
  <button :type="htmlType" :class="{ 'text-center': true, [buttonClass]: true }">{{ name }}</button>
</template>

<script setup lang="ts">
export type HTMLButtonTypes = 'button' | 'submit' | 'reset'

export interface ScButtonProps {
  name: string
  htmlType?: HTMLButtonTypes
  buttonClass?: string
}

withDefaults(defineProps<ScButtonProps>(), {
  htmlType: 'button',
  buttonClass: ''
})
</script>
