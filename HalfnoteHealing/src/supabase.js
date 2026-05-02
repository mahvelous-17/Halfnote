import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://mkxxctytwmuqqmqiahzq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1reHhjdHl0d211cXFtcWlhaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDMxNzUsImV4cCI6MjA5MjYxOTE3NX0.kgeOOkdplpF4rg1x-y-7tmHSa2PxwAegnkTPNAsk8Sg';

export const supabase = createClient(supabaseUrl, supabaseKey);