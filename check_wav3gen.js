const fs = require('fs');
const path = './Wav3Gen-responseIV.html'; // assumes script run from same folder

// rest identical


try {
    const content = fs.readFileSync(path, 'utf8');
    const match = content.match(/const permutation = \[(.*?)\];/s);
    if (match) {
        const arrayStr = match[1];
        const items = arrayStr.split(',').map(s => s.trim()).filter(s => s.length > 0);
        console.log(`Permutation array length: ${items.length}`);

        // Check for duplicates
        const unique = new Set(items);
        console.log(`Unique items: ${unique.size}`);

        // Check for missing numbers 0-255
        const present = new Set(items.map(Number));
        const missing = [];
        for (let i = 0; i < 256; i++) {
            if (!present.has(i)) missing.push(i);
        }
        console.log(`Missing numbers: ${missing.join(', ')}`);

    } else {
        console.log('Permutation array not found');
    }
} catch (err) {
    console.error(err);
}
