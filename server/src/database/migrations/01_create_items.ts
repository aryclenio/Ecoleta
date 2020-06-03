import Knex from "knex";

export async function up(knex: Knex) {
  // cria no banco
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex) {
  // remove do banco
  knex.schema.dropTable("items");
}
