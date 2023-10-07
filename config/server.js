module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 3306),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '89c0290cf972af01045d539adc8655dd'),
    },
  },
});
