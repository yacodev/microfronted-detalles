import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'details',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/header.tsx',
        './PokemonDetails': './src/pages/PokemonDetails.tsx',
      },
      remotes: {
        host: 'http://localhost:3000/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
