import fs from 'fs';
import path from 'path';

const replacePairs = [
    [/obsidian/g, 'base'],
    [/ivory/g, 'content'],
    [/champagne/g, 'accent'],
    [/slate/g, 'surface'],
    [/bg-\[\#111116\]/g, 'bg-surface'],
    [/bg-\[\#0A0A0E\]/g, 'bg-base'],
    [/from-\[\#111116\]/g, 'from-base'],

    // Images conversion (Midnight Luxe -> Brutalist Signal)
    [/https:\/\/images\.unsplash\.com\/photo-1451187580459-43490279c0fa/g, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'], // Hero
    [/https:\/\/images\.unsplash\.com\/photo-1541701494587-cb58502866ab/g, 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a'], // Philosophy
    [/https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71/g, 'https://images.unsplash.com/photo-1518398046578-8cca57782e17'], // Modal

    [/https:\/\/images\.unsplash\.com\/photo-1552664730-d307ca884978/g, 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968'], // CS 1
    [/https:\/\/images\.unsplash\.com\/photo-1460925895917-afdab827c52f/g, 'https://images.unsplash.com/photo-1513694203232-719a280e022f'], // CS 2
    [/https:\/\/images\.unsplash\.com\/photo-1552581234-26160f608093/g, 'https://images.unsplash.com/photo-1497366216548-37526070297c'], // CS 3 
    [/https:\/\/images\.unsplash\.com\/photo-1531403009284-440f080d1e12/g, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'], // CS 4
    [/https:\/\/images\.unsplash\.com\/photo-1556761175-4b46a572b786/g, 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f'], // CS 5

    // index.css scrollbar replacements
    [/#0D0D12/g, '#F5F3EE'],
    [/#2A2A35/g, '#E8E4DD'],
    [/#C9A84C/g, '#E63B2E']
];

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (/\.(jsx|js|css|html)$/.test(fullPath)) {
            let src = fs.readFileSync(fullPath, 'utf8');
            let original = src;
            for (const [regex, replacement] of replacePairs) {
                src = src.replace(regex, replacement);
            }
            if (src !== original) {
                fs.writeFileSync(fullPath, src);
            }
        }
    }
}
traverse('./src');

// index.html explicitly
let index = fs.readFileSync('./index.html', 'utf8');
for (const [regex, replacement] of replacePairs) {
    index = index.replace(regex, replacement);
}
// Google fonts replace
index = index.replace(
    /<link href="https:\/\/fonts\.googleapis\.com.*?rel="stylesheet">/,
    '<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">'
);
fs.writeFileSync('./index.html', index);

// tailwind.config.js rewrite
fs.writeFileSync('./tailwind.config.js', `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F5F3EE', // Paper
        surface: '#E8E4DD', // Off-white
        accent: '#E63B2E', // Signal Red
        content: '#111111' // Black Text
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
`);

console.log('Preset C successfully applied!');
