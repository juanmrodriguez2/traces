import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('CountryStats', function (table) {
      table.string('code').notNullable().primary();
      table.string('name').notNullable();
      table.bigint('occurrences').notNullable().defaultTo(0);
    })
    .createTable('LongestDistance', function (table) {
      table.string('code').notNullable();
      table.string('name').notNullable();
      table.decimal('distance').notNullable().defaultTo(0);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('CountryStats').dropTable('LongestDistance');
}
