import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Users', (table) => {
    table.uuid('id').defaultTo(knex.raw('(UUID())'));
    table.string('name').notNullable();
    table.string('username').unique();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.date('createdAt').defaultTo(knex.raw('(NOW())'));
    table.date('updatedAt').defaultTo(knex.raw('(NOW())'));
    table.date('deletedAt');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Users');
}
