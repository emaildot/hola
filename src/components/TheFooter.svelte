<script>
  import AnchorButton from './AnchorButton.svelte';
</script>

<footer>
  <AnchorButton
    href="https://github.com/emaildot/create-emaildot-app"
    target="_blank"
  >
    Getting Started
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </AnchorButton>
</footer>

<style>
  footer {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    padding-top: 2vmin;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 30vmin;
    text-align: end;
  }

  @media only screen and (min-width: 1100px) {
    footer {
      bottom: 10vmin;
    }
  }
</style>
