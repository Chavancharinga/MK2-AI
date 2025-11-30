
export const config = {
  gemini: {
    // FIX: API key must be read from process.env.API_KEY as per the guidelines.
    apiKey: process.env.API_KEY
  },
  googlePlaces: {
    apiKey: process.env.VITE_GOOGLE_PLACES_API_KEY || 'AIzaSyDHQj2vXLd9M3P8zN0wK5yR6tF7sU1vW2x'
  },
  serpApi: {
    apiKey: process.env.VITE_SERPAPI_KEY || '5567f02c5e813b1981ebf25c661d3a1fc6a9c0c22f2e78666c1e6ab8ab0008d9'
  },
  supabase: {
    url: process.env.VITE_SUPABASE_URL || 'https://jdjhdbqecdrxnjgojzle.supabase.co',
    anonKey: process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkamhkYnFlY2RyeG5qZ29qemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODM2MTEsImV4cCI6MjA3OTc1OTYxMX0.Vl_4APeOsXXzCr9jJ1oKQ6m5KtAkyo8oWKdBTz-5cCs'
  }
};