import fs from 'fs';
import path from 'path';

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (/\.(jsx|js|css|html)$/.test(fullPath)) {
            let src = fs.readFileSync(fullPath, 'utf8');
            if (src.includes('transurface')) {
                src = src.replace(/transurface/g, 'translate');
                fs.writeFileSync(fullPath, src);
            }
        }
    }
}
traverse('./src');
console.log('Fixed transurface typo');
