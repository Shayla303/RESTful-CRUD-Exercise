var db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return db.select('*').from('cartoon').orderBy('id');
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return db.select('*').from('cartoon').where('id', id);
}

function create(cartoon) {
	// Add a cartoon to the database//second parameter in the insert function is the return value of the query
	return db.insert(cartoon, '*').into('cartoon');
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
	return db('cartoon').where('id', id).update(cartoon);
}

function remove(id) {
	// Delete the specified cartoon
	return db('cartoon').where('id', id).delete();
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
