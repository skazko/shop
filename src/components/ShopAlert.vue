<template>
  <div :class="className">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
      validator(v) {
        return ["error", "success", "warning", "info"].includes(v);
      },
    },
  },
  computed: {
    className() {
      return {
        alert: true,
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
.alert {
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
}

.error {
  background-color: red;
}
.warning {
  background-color: orange;
}
.success {
  background-color: green;
}
.info {
  background-color: deepskyblue;
}
</style>
