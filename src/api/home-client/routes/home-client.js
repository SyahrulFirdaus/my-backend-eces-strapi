'use strict';

/**
 * home-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-client.home-client');
