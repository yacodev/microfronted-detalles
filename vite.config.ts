import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import dotenv from 'dotenv';

dotenv.config();

const HOST_URL = process.env.VITE_HOST_URL ?? 'http://localhost:3000';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'details',
      filename: 'remoteEntry.js',
      exposes: {
        './PokemonDetails': './src/pages/PokemonDetails.tsx',
      },
      remotes: {
        host: `${HOST_URL}/assets/remoteEntry.js`,
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
