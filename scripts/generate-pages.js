const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../services/service-template.html');
const dataPath = path.join(__dirname, '../data/services-data.json');
const navPath = path.join(__dirname, '../assets/partials/nav.html');
const footerPath = path.join(__dirname, '../assets/partials/footer.html');
const outputDir = path.join(__dirname, '../services');

async function generate() {
    console.log('Starting generation...');
    
    if (!fs.existsSync(templatePath)) {
        console.error('Template not found!');
        return;
    }
    
    const template = fs.readFileSync(templatePath, 'utf8');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    let navHtml = '';
    if (fs.existsSync(navPath)) {
        navHtml = fs.readFileSync(navPath, 'utf8');
    }
    
    let footerHtml = '';
    if (fs.existsSync(footerPath)) {
        footerHtml = fs.readFileSync(footerPath, 'utf8');
    }
    
    data.forEach(entry => {
        let output = template;
        
        // Inject Nav and Footer
        output = output.replace('<div id="nav-injected"></div>', navHtml);
        output = output.replace('<div id="footer-injected"></div>', footerHtml);
        
        // Replace Placeholders
        Object.keys(entry).forEach(key => {
            const regex = new RegExp('\\{\\{' + key + '\\}\\}', 'g');
            output = output.replace(regex, entry[key] || '');
        });
        
        const outputPath = path.join(outputDir, `${entry.slug}.html`);
        fs.writeFileSync(outputPath, output);
        console.log(`Generated: ${entry.slug}.html`);
    });
    
    console.log('Generation complete!');
}

generate();
