const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');
const srcDir = path.join(__dirname, 'src');

// Function to recursively find all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

// 1. Rename files and build a replacement map
const replacements = {};

// Rename images in public/images
if (fs.existsSync(imagesDir)) {
  const imageFiles = fs.readdirSync(imagesDir);
  imageFiles.forEach(file => {
    if (file.endsWith('.png') && !file.includes('-v2.png')) {
      const oldName = file;
      const newName = file.replace('.png', '-v2.png');
      fs.renameSync(path.join(imagesDir, oldName), path.join(imagesDir, newName));
      replacements[`/images/${oldName}`] = `/images/${newName}`;
    }
  });
}

// Rename logo.png
const logoPath = path.join(publicDir, 'logo.png');
if (fs.existsSync(logoPath)) {
  fs.renameSync(logoPath, path.join(publicDir, 'logo-v2.png'));
  replacements['/logo.png'] = '/logo-v2.png';
}

console.log('Renamed files. Replacement map:', replacements);

// 2. Replace strings in src/
const allSrcFiles = getAllFiles(srcDir);
const extensionsToCheck = ['.ts', '.tsx', '.js', '.jsx'];

let modifiedCount = 0;

allSrcFiles.forEach(file => {
  if (extensionsToCheck.includes(path.extname(file))) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Apply replacements
    for (const [oldStr, newStr] of Object.entries(replacements)) {
      // Use global regex replacement to catch all occurrences
      // Escape the old string to be safe in regex
      const escapedOldStr = oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedOldStr, 'g');
      content = content.replace(regex, newStr);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in ${file}`);
      modifiedCount++;
    }
  }
});

console.log(`Completed. Modified ${modifiedCount} files.`);
