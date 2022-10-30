<script>
	import Shopcard from '../Shopcard.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    const shop = data;
    // console.log(data)

</script>

<section class="content">
    <div class=""><Shopcard {shop} /></div>    
</section>

