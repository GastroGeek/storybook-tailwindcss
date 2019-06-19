<template>
  <div class="btn btn-blue">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "SomeOtherButton"
};
</script>

<style lang="scss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;

  &.btn-blue {
    @apply bg-blue-500 text-white;

    &:hover {
      @apply bg-blue-700;
    }
  }
}
</style>