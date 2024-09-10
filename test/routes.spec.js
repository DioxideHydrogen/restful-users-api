const request = require('supertest');
const assert = require('assert');
const app = require('../index');
const supertest = require('supertest');

describe('User Middleware', () => {

	const user = {
		name: 'John Doe',
		email: 'johndoe@teste.com',
		password: '123456',
		age: 30,
		phone: '1234567890'
	};

	it('get /users should list all users as array json and return 200 http code', (done) => {
		supertest(app)
			.get('/users')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Array);
				done();
			});
	});

	it('post /users should create a new user and return 200 http code', (done) => {
		supertest(app)
			.post('/users')
			.send(user)
			.expect(201)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Object);
				if(res.body._id) user._id = res.body._id;
				done();
			});
	});

	it('get /users/:id should return a user as object json and return 200 http code', (done) => {
		supertest(app)
			.get(`/users/${user._id}`)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Object);
				done();
			});
	});

	it('put /users/:id should update a user and return 200 http code', (done) => {
		supertest(app)
			.put(`/users/${user._id}`)
			.send({
				name: 'John Doe Updated',
			})
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Object);
				assert(res.body.name === 'John Doe Updated');
				done();
			});
	});

	it('delete /users/:id should delete a user and return 200 http code', (done) => {
		supertest(app)
			.delete(`/users/${user._id}`)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Object);
				done();
			});
	});

	it('get /users/removeds should list all removed users as array json and return 200 http code', (done) => {
		supertest(app)
			.get('/users/removeds')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Array && res.body.length > 0);
				done();
			});
	});

	it('delete /users/all should delete all users and return 200 http code', (done) => {
		supertest(app)
			.delete('/users/all')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				assert(res.body instanceof Object && res.body.deletedCount > 0);
				done();
			});
	});

});
	