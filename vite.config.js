import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true // 👈 Active un mode d'écoute plus stable pour certains systèmes
    },
    port: 5173,        // 👈 S’assure que le port reste fixe
    open: true         // 👈 Ouvre automatiquement ton navigateur (optionnel)
  }
});
