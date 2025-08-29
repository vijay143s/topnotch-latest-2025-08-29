#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const template = (componentName, competitorId) => `import ComparePageTemplate from "@/components/ComparePageTemplate";

const ${componentName} = () => {
  return <ComparePageTemplate competitorId="${competitorId}" />;
};

export default ${componentName};
`;

const compareDir = path.join(__dirname, 'src', 'pages', 'compare');

// Get all comparison pages
const files = fs.readdirSync(compareDir)
  .filter(file => file.startsWith('topnotchsolutions-vs-') && file.endsWith('.tsx'));

// Update each file
files.forEach(file => {
  const filePath = path.join(compareDir, file);
  const componentName = file
    .replace('.tsx', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  const competitorId = file
    .replace('topnotchsolutions-vs-', '')
    .replace('.tsx', '')
    .replace('-', '_')
    .toLowerCase();

  fs.writeFileSync(filePath, template(componentName, competitorId));
  console.log(`Updated ${file}`);
});

console.log('All comparison pages updated!');
