<script>
    // import { user } from '$lib/sessionStore'
    import { supabase } from '$lib/supabaseClient'
    import { v4 as uuid } from 'uuid'
    import { goto } from '$app/navigation'
    import { marked } from 'marked'
    import sanitizeHtml  from 'sanitize-html'
    // let shop = {
    //     title: 'Test title',
    //     content: 'Test content...'
    // }
    // const { title, content } = shop
    let title = '';
    let content =''

    const user = supabase.auth.user()
    console.log(user)
    if (!user) {
        goto('/')
    }

    async function createNewShop() {
        if(!title || !content) return
        const id = uuid()
        
        // console.log(shop)
        const { data , error} = await supabase
        .from('Shop')
        .insert([
            { id, title, content, authorId: user.email, updatedAt: new Date(), createdAt: new Date(), published: false }
        ])
        .single()

        console.log(data)
        goto(`/shops/${data.id}`)
        if (error) {
            console.log(error)
        }
    }


</script>
<form class="box" on:submit|preventDefault="{createNewShop}">
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
    <button class="button is-primary" type="submit">Create New Shop</button>
</form>
