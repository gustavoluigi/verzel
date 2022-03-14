module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'verzeldb_user',
  password: 'verzeldb_pass',
  database: 'verzeldb_database',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};

// module.exports = {
//   dialect: 'sqlite',
//   storage: '../database/db.sqlite',
//   define: {
//     timestamps: true,
//     underscored: true,
//   },
// };
