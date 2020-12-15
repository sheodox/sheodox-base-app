require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.PGHOST || 'postgres',
    port: process.env.PGPORT || 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    entities: [
        'src/server/entity/**/*.js'
    ],
    migrations: [
        'src/server/migration/**/*.js'
    ],
    cli: {
        entitiesDir: 'src/server/entity',
        migrationsDir: 'src/server/migration',
    }
}