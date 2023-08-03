'use strict';

/**
 * tester controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tester.tester');
