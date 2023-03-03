const config = {
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USERNAME ?? 'postgres',
    password: process.env.POSTGRES_PASSWORD ?? 'Password01.',
    database: process.env.POSTGRES_DBNAME ?? 'postgres',
    host: process.env.POSTGRES_HOST ?? '127.0.0.1',
    port: process.env.POSTGRES_PORT ?? 5432,
  },
  migrations: { extension: 'ts', directory: './migrations' },
  asyncStackTraces: process.env.NODE_ENV !== 'production',
  pool: {
    min: 0,
    max: 3,
  },
};

module.exports = config;
