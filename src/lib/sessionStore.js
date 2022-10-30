/**
 * to access the user information in other places, we use a writable store
 */
import { writable } from 'svelte/store'

export const user = writable(false)