const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/services-data.json');

function validate() {
    console.log('Validating services data...');
    
    if (!fs.existsSync(dataPath)) {
        console.error('Data file not found!');
        return;
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const requiredFields = [
        'slug', 'SERVICE_NAME', 'HERO_HEADLINE', 'HERO_SUB',
        'PROBLEM_1_TITLE', 'PROBLEM_1_DESC',
        'SOLUTION_1_TITLE', 'SOLUTION_1_DESC',
        'STEP_1_TITLE', 'STEP_1_DESC',
        'WEEK_1_MILESTONE', 'WEEK_1_DELIVERABLE',
        'FEATURE_1', 'PORTFOLIO_IMG_1',
        'RELATED_SERVICE_1', 'RESULT_1',
        'CASE_STUDY_CLIENT', 'FAQ_1_Q', 'FAQ_1_A',
        'CTA_HEADLINE', 'PRICING_ANCHOR', 'META_TITLE', 'META_DESC'
    ];
    
    let errors = 0;
    const slugs = new Set();
    
    data.forEach((entry, index) => {
        // Check for required fields
        requiredFields.forEach(field => {
            if (!entry[field]) {
                console.error(`Entry ${index} (${entry.slug || 'no slug'}): Missing field ${field}`);
                errors++;
            }
        });
        
        // Check for duplicate slugs
        if (slugs.has(entry.slug)) {
            console.error(`Duplicate slug found: ${entry.slug}`);
            errors++;
        }
        slugs.add(entry.slug);
        
        // Check meta lengths
        if (entry.META_TITLE && entry.META_TITLE.length > 60) {
            console.warn(`Entry ${entry.slug}: META_TITLE is long (${entry.META_TITLE.length} chars)`);
        }
    });
    
    if (errors === 0) {
        console.log('Validation passed! All entries are healthy.');
    } else {
        console.error(`Validation failed with ${errors} errors.`);
    }
}

validate();
