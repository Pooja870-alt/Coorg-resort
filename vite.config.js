import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT || '10000'),
      allowedHosts: ['coorg-hill-view-resort-02n4.onrender.com', 'localhost'],
    }
})
