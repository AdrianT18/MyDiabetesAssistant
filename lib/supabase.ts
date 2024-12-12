import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qivmsqmjyxgdlvospjqj.supabase.co"
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdm1zcW1qeXhnZGx2b3NwanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NzA4ODQsImV4cCI6MjA0OTE0Njg4NH0.Lijuh7xsOWPjsvIyqLaQ4BRDNBDPOypO5T8SioTV-DY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})
