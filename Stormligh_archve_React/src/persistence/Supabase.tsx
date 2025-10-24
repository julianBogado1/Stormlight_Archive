import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cemgiihxqpsprgwgdrxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlbWdpaWh4cXBzcHJnd2dkcnhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTMxODA3OSwiZXhwIjoyMDc2ODk0MDc5fQ.B5IPtOjn7gHPC0sZ7WzjDcikcKYXP-AWHAgECzKQ2M8'

export const supabase = createClient(supabaseUrl, supabaseKey)
