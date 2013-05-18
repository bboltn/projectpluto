Template.createTemplate.events({
	'click #btnCreate': function() {
		console.log('Create Template Clicked');
		TemplateGroup.insert({name: taProperties.value});
		console.log('Item inserted');
	}
});