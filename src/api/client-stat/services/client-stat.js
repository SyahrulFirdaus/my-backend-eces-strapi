'use strict';

/**
 * client-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-stat.client-stat');
