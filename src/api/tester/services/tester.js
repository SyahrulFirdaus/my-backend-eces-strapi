'use strict';

/**
 * tester service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tester.tester');
