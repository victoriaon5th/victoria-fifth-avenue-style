// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://inxxeepajmokwabzlfkx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlueHhlZXBham1va3dhYnpsZmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMzY1ODUsImV4cCI6MjA2ODgxMjU4NX0.TnK0XZ8UmIhLiapxGQ7Wp5mioCKNBb89JD-SJSHJqPA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});