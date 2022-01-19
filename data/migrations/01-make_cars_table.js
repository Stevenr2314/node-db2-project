exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin').unique().notNullable();
    tbl.text('make').unique();
    tbl.text('model').unique();
    tbl.decimal('mileage').unique();
    tbl.text('title');
    tbl.text('transmission');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
