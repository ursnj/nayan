#!/usr/bin/env node

import { copyFileSync, mkdirSync } from 'fs';

// Ensure dist/components directory exists
mkdirSync('dist/', { recursive: true });

// Copy CSS file
copyFileSync('src/styles.css', 'dist/styles.css');

console.log('✅ CSS files copied.');
