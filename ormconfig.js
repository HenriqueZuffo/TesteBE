module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'teste',
    entitites: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    }
}