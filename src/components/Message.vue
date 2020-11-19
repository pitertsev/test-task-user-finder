<template>
  <p :class="classes">{{ message }}</p>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true
    },
    classes: {
      type: String,
    }
  }
}
</script>

