// eslint-disable-next-line
exports.up = function(knex, Promise) {
    return knex.schema.createTable('likes', table => {
        table.increments('id');
        table.integer('user_id_one');
        table.foreign('user_id_one').references('id').inTable('users').onDelete('CASCADE');
        table.integer('user_id_two');
        table.foreign('user_id_two').references('id').inTable('users').onDelete('CASCADE');
    })
    // eslint-disable-next-line
    .then(() => {
        return knex.raw(
          "SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes))"
        );
    });
};

// eslint-disable-next-line
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('likes');
};
