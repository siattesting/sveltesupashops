  <script>
  import "../app.css";
	import Navbar from "../lib/Navbar.svelte";
</script>
  <section class="container">
    <Navbar />
    <div class="container">
      <slot></slot>
    </div>
  
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>SvelteShops</strong> by <a href="/">SvelteKit & Supabase</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </section>


<style>
    nav {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 10px;
      justify-content: space-between;
      padding: 10px;
    }
    nav a:hover {
        background-color: coral;
        color: white;
    }
</style>