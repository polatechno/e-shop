import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
    createBrowserClient(
        "https://imjlqgjlwweruvhvhyid.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltamxxZ2psd3dlcnV2aHZoeWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MDU0OTIsImV4cCI6MjA0MzI4MTQ5Mn0.STuy4L6lQLK4h-nMx2U-iRRRTVTphyNHyLd2yJmdm8M",

    )
