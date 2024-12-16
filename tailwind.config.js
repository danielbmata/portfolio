/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        azul_medio: "#3A86FF",
        amarelo_suave: "#FFC300",
        cinza_claro: "#F8F9FA",
        azul_escuro: "#023E8A",
        fundo_escuro: "#242424",
        fundo_claro: "#F8F9FA",
        texto_claro: "#FFFFFF",
        texto_escuro: "#023E8A",
        cor_fundo_escuro: '#2d3748', 
        cor_texto_claro: '#f7fafc', 
        cor_fundo_claro: '#f9fafb', 
        cor_texto_escuro: '#2d3748', 
      },
    },
  },
  plugins: [],
}
