<script>
    export let shop
</script>
<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4"><a href={`/shops/${shop.id}`}>{shop.title}</a></p>
          <p class="subtitle is-6">@{shop.id}</p>
        </div>
      </div>
  
      <div class="content">
        <p>{shop.content}</p>
        <div class="tags are-medium">
          <span class="tag is-dark">by:</span>
          <span class="tag is-info is-light is-medium"><strong>{shop.authorId}</strong>.</span>
        </div>
        <a href="/">#css</a> <a href="/">#responsive</a>
        <br>
        <time datetime="{shop.updatedAt}">{shop.updatedAt}</time>
      </div>
      <footer class="card-footer">
          <a href={`/shops/${shop.id}`} class="card-footer-item">View</a>
          <a href={`/shops/${shop.id}/edit`} class="card-footer-item">Edit</a>
          <a href="/" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>