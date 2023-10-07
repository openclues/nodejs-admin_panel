module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', ' localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'buycheap_strapi'),
        username: env('DATABASE_USERNAME', 'buycheap_strapi'),
        password: env('DATABASE_PASSWORD', 'buycheap_strapi'),
      },
      options: {},
    },
  },
});
