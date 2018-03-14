// eslint-disable-next-line
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
      table.increments('id');
      table.integer('match_id');
      table.foreign('match_id').references('id').inTable('matches').onDelete('CASCADE');
      table.integer('sent_by');
      table.foreign('sent_by').references('id').inTable('users').onDelete('CASCADE');
      table.integer('received_by');
      table.foreign('received_by').references('id').inTable('users').onDelete('CASCADE');
      table.string('text', 140);
      table.timestamps(true, true);
  })
  // eslint-disable-next-line
  .then(() => {
      return knex.raw(
        "SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))"
      );
  });
};

// eslint-disable-next-line
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
