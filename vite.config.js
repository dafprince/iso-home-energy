import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Alias pour imports simplifiés
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@data': resolve(__dirname, './src/data'),
      '@assets': resolve(__dirname, './src/assets'),
    }
  },
  
  // Optimisations
  build: {
    minify: 'esbuild',
    // Taille de chunk optimisée
    chunkSizeWarningLimit: 1000,
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
      }
    },
    
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['framer-motion'],
          'forms': ['react-hook-form'],
          'icons': ['lucide-react'],
        }
      }
    }
  },
  
  // Server config
  server: {
    port: 5173,
    open: true, // Ouvrir le navigateur automatiquement
  },
  
  // Preview config
  preview: {
    port: 4173,
  }
})
