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
	
	test('in the client', function(done, server, client) {
		client.eval(function() {
			Meteor.call("createItemTemplate", {
				name: "Laika Test", 
				properties: ["Property1", "Property2", "Property3"]
			},
			function(error, id) {
				if(error)
					emit('error', error);
				else
					emit('success', error);
			});
		});
		
		client.once('error', function(error) {
			assert.fail(1, 2);
			done();
		})
		
		client.once('success', function() {
			assert.ok('ok', 'ok');
			done();
		})
	})
});