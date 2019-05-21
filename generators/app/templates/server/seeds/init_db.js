exports.seed = async (knex, Promise) => {
  await knex('status').del()

  // Inserts seed entries
  return knex('status').insert(
    {
      status: 'ok'
    }
  )
}
