exports.up = async (knex, Promise) => {
  await knex.schema.createTable('status', table => {
    table.string('status').primary()
  })
}

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists('status')
}
