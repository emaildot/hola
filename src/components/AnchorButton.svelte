<script>
  export let href;
  export let target;
</script>

<a class="anchor" rel="noreferrer nofollow" {href} {target}>
  <slot />
</a>

<style>
  a {
    color: inherit;
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    font-size: clamp(1.5rem, 3vmin, 3rem);
    font-weight: 700;
  }

  a > :global(svg) {
    margin-left: 8px;
    width: 2rem;
    height: 2rem;
  }
</style>
