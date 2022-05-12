const seedData = [
  {
    conceptId: 1,
    displayName: "Diagnosis",
    description: "Entity domain",
    parentId: null,
    childIds: [2, 3],
    alternateNames: null,
  },
  {
    conceptId: 2,
    displayName: "Disease of Nervous System",
    description: "Diseases targeting the nervous System",
    parentId: [1],
    childIds: [4],
    alternateNames: null,
  },
  {
    conceptId: 3,
    displayName: "Diseases of the Eye",
    description: "Diseases targeting the eye",
    parentId: [1],
    childIds: [2, 3],
    alternateNames: null,
  },
  {
    conceptId: 4,
    displayName: "Multiple Sclerosis (MS)",
    description: "Multiple Sclerosis",
    parentId: [2, 8],
    childIds: [5, 6, 7],
    alternateNames: ["MS", "name1", "name2"],
  },
];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await seedData.forEach(async (data) => {
    let result = await knex("medicalConcepts").insert(data);
    console.log(result);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex("medicalConcepts")
    .where("conceptId", 1 || 2 || 3 || 4)
    .del();
};
