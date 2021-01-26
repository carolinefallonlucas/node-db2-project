
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>
    { 
        tbl.increments("car_id"); 
        tbl.integer('VIN', 17)
            .unique()
            .notNullable();
        tbl.string('Make')
            .notNullable();
        tbl.string('Model')
        notNullable();
        tbl.integer('Mileage')
        notNullable();
        tbl.string('Transmission Type');
        tbl.string('Title Status'); 
  })
}; 

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
