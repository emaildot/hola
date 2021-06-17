<script>
  import TheHeader from './components/TheHeader.svelte';
  import Description from './components/Description.svelte';
  import TheFooter from './components/TheFooter.svelte';
</script>

<main class="App">
  <TheHeader />
  <Description />
  <TheFooter />
</main>

<style>
  main {
    min-height: 100vh;
    position: relative;
  }
</style>
