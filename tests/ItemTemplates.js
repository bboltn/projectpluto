var assert = require('assert');

suite('ItemTemplates', function() {
	test('in the server', function(done, server) {
		server.eval(function() {
			itemTemplateCol.insert({
				name: "Laika Test",
				properties: ["Property1", "Property2", "Property3"]
			});
			var docs = itemTemplateCol.find().fetch();
			emit('docs', docs);
		});
	
		server.once('docs', function(docs) {
			assert.equal(docs.length, 1);
			done();
		});
	});
	
	test('in the client', function(done, server, client) {
		client.eval(function() {
			itemTemplateCol.insert({
				name: "Laika Test",
				properties: ["Property1", "Property2", "Property3"]
			});
			
			var docs = itemTemplateCol.find().fetch();
			emit('docs', docs);
		});
	
		client.once('docs', function(docs) {
			assert.equal(docs.length, 1);
			done();
		});
	});
});