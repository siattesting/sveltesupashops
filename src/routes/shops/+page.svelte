<script>
    /** @type {import('./$types').PageData} */  
    export let data;

    // Because data above is an object-type list of shops
    // we need to return it as an array for #each iteration to work
    let shops = Object.values(data) // 

    import Shopcard from './Shopcard.svelte';

</script>
{#if shops.length > 0}
<div class="container">
    <h2>Shops</h2>
    <div><a class="button is-info is-outlined mb-5 mt-5" href="/shops/create-shop">Create Shop</a></div>
    <div class="shops-grid">
        {#each shops as shop (shop.id)}
        <Shopcard {shop} />
        {/each}
    </div>
</div>
{:else}
<div class="box is-danger">
    <p class="is-danger">No shops found. Try again later</p>
</div>
{/if}

<style>
    .shops-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>