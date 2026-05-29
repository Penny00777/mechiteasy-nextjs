const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const INPUT_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public-webp');
const CONCURRENCY_LIMIT = 5; // Batch processing limit for speed
const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.bmp', '.tiff']);

// Ensure the output directory exists
if (!fsSync.existsSync(OUTPUT_DIR)) {
    fsSync.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Recursively scans a directory for image files.
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function getImages(dir) {
    let results = [];
    try {
        const list = await fs.readdir(dir, { withFileTypes: true });
        for (const dirent of list) {
            const fullPath = path.join(dir, dirent.name);
            if (dirent.isDirectory()) {
                const nestedFiles = await getImages(fullPath);
                results = results.concat(nestedFiles);
            } else {
                const ext = path.extname(dirent.name).toLowerCase();
                if (ALLOWED_EXTENSIONS.has(ext)) {
                    results.push(fullPath);
                }
            }
        }
    } catch (error) {
        console.error(`❌ Failed to read directory: ${dir}`, error.message);
    }
    return results;
}

/**
 * Converts a single image to WebP format.
 * @param {string} inputPath
 */
async function processImage(inputPath) {
    try {
        // Calculate the relative path from the input directory
        const relativePath = path.relative(INPUT_DIR, inputPath);
        
        // Determine the output path, changing the extension to .webp
        const parsedPath = path.parse(relativePath);
        const outputRelativePath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
        const outputPath = path.join(OUTPUT_DIR, outputRelativePath);

        // Ensure the sub-directory exists in the output folder
        const outputDir = path.dirname(outputPath);
        if (!fsSync.existsSync(outputDir)) {
            await fs.mkdir(outputDir, { recursive: true });
        }

        // Convert the image using sharp
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);

        console.log(`✅ Success: ${relativePath} -> ${outputRelativePath}`);
    } catch (error) {
        console.error(`❌ Error converting ${inputPath}:`, error.message);
    }
}

/**
 * Processes all images with batching for speed.
 * @param {string[]} images
 */
async function processAllImages(images) {
    console.log(`🔍 Found ${images.length} images to process.`);
    console.log(`⚙️  Starting conversion using ${CONCURRENCY_LIMIT} concurrent workers...\n`);

    for (let i = 0; i < images.length; i += CONCURRENCY_LIMIT) {
        const batch = images.slice(i, i + CONCURRENCY_LIMIT);
        await Promise.all(batch.map(img => processImage(img)));
    }

    console.log('\n🎉 All processing completed.');
}

// Main Execution
(async () => {
    try {
        const images = await getImages(INPUT_DIR);
        if (images.length === 0) {
            console.log('⚠️ No matching images found in the /public directory.');
            return;
        }
        await processAllImages(images);
    } catch (error) {
        console.error('❌ Fatal Error:', error);
    }
})();
