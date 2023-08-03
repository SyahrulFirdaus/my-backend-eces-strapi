'use strict';

/**
 * about-vm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-vm.about-vm');
