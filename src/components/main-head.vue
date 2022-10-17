<script lang="ts" setup>
import '../styles/global.css';

const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    generator: string;
  }>(),
  {
    title: 'Jeanine White: Personal Site',
    description: 'The personal site of Jeanine White',
  },
);
</script>

<template>
  <meta charset="UTF-8" />
  <meta
    name="description"
    property="og:description"
    :content="props.description"
  />
  <meta name="viewport" content="width=device-width" />
  <meta name="generator" :content="generator" />
  <title v-text="props.title" />

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
    rel="stylesheet"
  />
</template>
