<script>
    /** @type {import('./$types').LayoutData} */  export let data;
  </script>
  
  <h1>Settings</h1>
  
  <nav class="level">
    {#each data.sections as section}
    <p class="level-item has-text-centered">
      <a href="/settings/{section.slug}" class="link is-info">{section.title}</a>
    </p>
    {/each} 
  </nav>
  <slot></slot>