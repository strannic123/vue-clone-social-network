<template>
  <div>{{message}}</div>
</template>

<script>
export default {
name: "McvErrorMessage",
  props: {
    error: {
      type: String,
      required: false,
      default: 'Something bad happend'
    }
  }
}
</script>

<style scoped>

</style>
