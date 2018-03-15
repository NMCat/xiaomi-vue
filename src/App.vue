<template>
  <div>
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
    position: absolute;
  }
  .fade-enter {
    transform: translateX(100%);
  }
  .fade-leave-to{
    transform: translateX(-100%);
  }

</style>
