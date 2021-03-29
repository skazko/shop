<template>
  <button @click="$emit('click')" :class="className"><slot></slot></button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
      validator(v) {
        return ["primary", "danger"].includes(v);
      },
    },
    size: {
      type: String,
      default: "m",
      validator(v) {
        return ["s", "m", "l"].includes(v);
      },
    },
  },
  computed: {
    className() {
      return [this.color, this.size];
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  user-select: none;
  background-color: transparent;
  font-weight: 500;
  transition: 0.15s ease-in;
}

button:not(:disabled) {
  cursor: pointer;
}

button:disabled {
  opacity: 0.3;
}

button:focus,
button:hover {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

button:active {
  filter: brightness(0.8);
}

.primary {
  background-color: #42b983;
  color: #ffffff;
}

.danger {
  background-color: #b22222;
  color: #ffffff;
}

.s {
  font-size: 12px;
  padding: 2px 5px;
}
.m {
  font-size: 14px;
  padding: 4px 12px;
}
.l {
  font-size: 16px;
  padding: 8px 16px;
}
</style>
