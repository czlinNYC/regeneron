/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("medicalConcepts", function (table) {
    table.increments("conceptId");
    table.string("displayName", 255).notNullable();
    table.string("description", 500);
    table.specificType("parentId", "INT[]");
    table.specificType("childIds", "INT[]");
    table.specificType("alternateNames", "TEXT[]");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("medicalConcepts");
};
