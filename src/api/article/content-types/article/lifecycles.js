module.exports = {
  async afterCreate(event) {
    const { result } = event;

    await strapi.entityService.create('api::audit-log.audit-log', {
      data: {
        action: 'CREATE',
        Contenttype: 'Article',
        date: new Date(),
        description: `New article created with title: ${result.title}`,
      },
    });
  },       
  async afterUpdate(event) {
    const { result } = event;

    await strapi.entityService.create('api::audit-log.audit-log', {
      data: {
        action: 'UPDATE',
        Contenttype: 'Article',
        date: new Date(),
        description: `Article updated with title: ${result.title}`,
      },
    });
  },
  async afterDelete(event) {
    const { result } = event;

    await strapi.entityService.create('api::audit-log.audit-log', {
      data: {
        action: 'DELETE',
        Contenttype: 'Article',
        date: new Date(),
        description: `Article deleted with title: ${result.title}`,
      },
    });
  },
};
