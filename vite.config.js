import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), svgrPlugin()]
})
