import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient'
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const { data } = await supabase.from('Shop').select('*');
 
  if (data) {
    return data
  } else {
    console.log('Error fetching data from table Shop: ')
  }

  // if (error) {
  //     console.log(JSON.stringify(error))
  // }
 
  // throw error(404, 'Not found');
}