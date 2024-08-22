import {
  createClientComponentClient,
  createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";

import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabaseClient = createClient(URL, ANON, {
  auth: { persistSession: false },
});

export const supabaseComponent = createClientComponentClient();

export const supabaseRouteHandler = (cookies) => {
  const supabase = createRouteHandlerClient({ cookies });
  console.log("supabase", supabase);
  return supabase;
};
