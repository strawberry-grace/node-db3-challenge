const db = require('../data/schemesdb-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id });
}

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('schemes.scheme_name', 'steps.id as step_id', 'steps.step_number', 'steps.instructions')
        .where('schemes.id', id);
}

async function add(scheme) {
    const [ id ] = await db('schemes').insert(scheme);
    return db('schemes').where({ id });
}

async function addStep(stepData, scheme_id) {
    const [ id ] = await db('steps').insert({ ...stepData, scheme_id });
    return db('steps').where({ id });
}

async function update(scheme_name, id) {
    await db('schemes').where({ id }).update(scheme_name);
    return db('schemes').where({ id });
}

async function remove(id) {
    return db('schemes').where({ id }).del();
}