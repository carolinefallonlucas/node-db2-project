const database = require("../../data/db-config");

module.exports = {
  getAll() {
    return database("cars");
  },
  create(car) {
    return database("cars")
      .insert(car)
      .then(([car_id]) => {
        return database("cars")
          .where("car_id", car_id)
          .first();
      });
  }
};
