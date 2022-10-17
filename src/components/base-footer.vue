<script lang="ts" setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer>
    &copy; {{ currentYear }} Jeanine White
    <small class="byline">🚀 Built by Astro</small>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding-top: 8rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
}

.byline {
  display: block;
  margin-top: 1rem;
  color: var(--t-subdue);
  font-size: var(--f-d2);
  text-transform: uppercase;
}
</style>
