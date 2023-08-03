'use strict';

/**
 * home-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-value.home-value');
