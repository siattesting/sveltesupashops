import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient'
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { id } = params
  const { data } = await supabase.from('Shop').select().filter('id', 'eq', id).single();
 
  if (data) {
    return data
  } else {
    console.log('Error fetching data from table Shop: ')
    throw error(404, 'Not found');
  }

  // if (error) {
  //     console.log(JSON.stringify(error))
  // }
 
//   throw error(404, 'Not found');
}