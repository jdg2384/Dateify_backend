// eslint-disable-next-line
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('spotify_id').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('description').notNullable();
        table.string('photo').notNullable();
        table.decimal('latitude', 10, 5).notNullable();
        table.decimal('longitude', 10, 5).notNullable();
        table.string('age_range').notNullable();
        table.integer('radius').notNullable();
        table.string('desired_gender').notNullable();
        table.integer('match_score').notNullable();
        table.jsonb('top_tracks').notNullable();
        table.jsonb('top_artists').notNullable();
        table.boolean('is_initialized').notNullable().defaultsTo('false');
        // table.jsonb('thumbs_down',)
    });
};

// eslint-disable-next-line
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
