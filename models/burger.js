import orm from "../config/orm";

const burger = {
  getBurgers: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  newBurger: (columns, values, cb) => {
    orm.insertOne("burgers", columns, values, (res) => {
      cb(res);
    });
  },
  isDevoured: (id, cb) => {
    orm.updateOne("burgers", "devoured", true, id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
