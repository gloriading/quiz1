

exports.up = function(knex, Promise) {

  return knex.schema.createTable('clucks',table => {
    table.increments('id');
    table.string('username');
    table.string('image_url');
    table.text('content');
    table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clucks');
};
