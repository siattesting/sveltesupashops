<script>

import { supabase } from '$lib/supabaseClient'
import Layout from '../routes/+layout.svelte';

let loading = false
let email

const handleLogin = async () => {
    try {
        loading = true
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error;
        alert('Check your email for the login link')
        
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading = false
    }
}
</script>

<section class="container">
    <div>
        <h1>Supabase-Svelte | Login Form</h1>
        <p class="description">Sign in via magic link with your email below</p>
    </div>

    <form class="box" on:submit|preventDefault="{handleLogin}">
    <div class="field">
        <label htmlfor="email" class="label">Email</label>
        <div class="control">
        <input class="input" type="email" placeholder="e.g. alex@example.com" bind:value="{email}" />
        </div>
    </div>

    <div class="field">
        <label class="label">Password</label>
        <div class="control">
        <input class="input" type="password" placeholder="********" />
        </div>
    </div>

    <input class="button is-primary" type="submit" value={loading ? "Loading..." : "Send magic link"} disabled={loading} />
    </form>

</section>