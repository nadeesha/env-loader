import logger from './logger.js';
import fs from 'fs';
import path from 'path';

export default {
  load: (options = {}) => {
    const envFile = `${process.env.NODE_ENV || ''}.env`;
    const filePath = path.resolve(options.path || '', envFile);

    logger.log('loading from path:', filePath);

    let content;

    try {
      content = fs.readFileSync(filePath).toString();
    } catch (e) {
      logger.log('Nothing to do...');
    }

    if (!content) {
      return;
    }

    logger.log('loaded file from:', filePath);

    content.split('\n').forEach(declaration => {
      declaration = declaration.trim();

      if (declaration.length > 1 && declaration.indexOf('=') === -1) {
        throw new Error('invalid declaration:', declaration);
      }

      const [key, value] = declaration.split('=');

      process.env[key.trim()] = value.trim();

      logger.log('loaded env var:', key);
    });
  },
};
