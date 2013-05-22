Template.createTemplate.events({
	'click #btnCreate': function() {
		console.log('Create Template Clicked');
		
		var newTemplate = {};
		newTemplate.name = txtTemplateName.value;
		var properties = taProperties.value.split('\n');
		
		newTemplate.properties = [];
		for (var i = 0; i < properties.length; i++) {
			newTemplate.properties.push(properties[i]);
		}
		
		console.log(newTemplate);
		TemplateGroup.insert(newTemplate);
		
		console.log('Item Inserted');
	}
});