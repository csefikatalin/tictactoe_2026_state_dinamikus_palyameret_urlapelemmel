# Tic-Tac-Toe

A táblázat mérete dinamikusan változik

## gh-pages csomag használata pages linkekhez

### 1. A csomag telepítése

npm install --save-dev gh-pages

### 2. Állítsd be az útvonalat a GitHub-repository nevéhez a **vite.config.js** fájlban

Egy projektoldal URL-je általában így néz ki: https://FELHASZNALONEV.github.io/REPOSITORY-NEVE/

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REPOSITORY-NEVE/',
})
```

### 3. Add hozzá a build és deploy parancsokat - package.json

Nyisd meg a package.json fájlt, és a "scripts" részt egészítsd ki így:

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

A predeploy automatikusan lefut a deploy előtt: előbb elkészül a dist mappa, majd annak tartalma feltöltődik a gh-pages ágra, a deploy-olod a projektet. 

```
npm run deploy
```