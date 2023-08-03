'use strict';

/**
 * home-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-client.home-client');
