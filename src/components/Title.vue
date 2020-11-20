<template>
  <h1 v-if="tag === 'h1'" :class="classes">{{ title }}</h1>
  <h2 v-else-if="tag === 'h2'" :class="classes">{{ title }}</h2>
  <h3 v-else-if="tag === 'h3'" :class="classes">{{ title }}</h3>
  <h4 v-else-if="tag === 'h3'" :class="classes">{{ title }}</h4>
  <h5 v-else-if="tag === 'h3'" :class="classes">{{ title }}</h5>
  <h6 v-else-if="tag === 'h3'" :class="classes">{{ title }}</h6>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'h1'
    },
    classes: {
      type: String,
    }
  }
}
</script>

