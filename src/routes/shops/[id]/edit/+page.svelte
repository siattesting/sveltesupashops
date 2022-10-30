<script>
    /** @type {import('./$types').PageData} */
    import { supabase } from '$lib/supabaseClient'
	import { goto } from '$app/navigation';
    export let data;
    let message =''
    const shop = data;
    const id = shop.id
    let title = shop.title
    let content = shop.content
    const editShop = async () => {
        const { data, error } = await 
        supabase.from('Shop')
        .update([
            { title, content }
        ])
        .eq('id', id)
        if(data) {
            message = 'Shop updated succesfully.'
            console.log(data)
            goto(`/shops/${data[0].id}`)
        }

        if (error) {
            console.log(error)
            message = 'Error ! Operation not successful.'
        }
    }

</script>
<form class="box" on:submit|preventDefault={editShop}>
    <div class="field">
        <label class="label" for="title">Title:</label>
        <div class="control">
            <input class="input" type="text" bind:value={title} />
        </div>        
    </div>
    
    <div class="field">
        <label class="label" for="content">Content:</label>
        <div class="control">             
            <textarea class="textarea" type="text" bind:value={content}></textarea>
        </div>        
    </div>
    <button class="button is-primary" type="submit">Update Shop</button>
</form>