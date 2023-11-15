import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.LOGIN_URL': JSON.stringify(process.env.LOGIN_URL),
    'import.meta.env.CLIENT_TOKEN': JSON.stringify(process.env.CLIENT_TOKEN ),
    'import.meta.env.PANGEA_DOMAIN': JSON.stringify(process.env.PANGEA_DOMAIN),
  }
,  

  plugins: [react()],
})
