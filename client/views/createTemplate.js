Template.createTemplate.events({
	'click #btnCreate': function() {
		console.log('Create Template Clicked');

		//call the meteor method createItemTemplate
		var newTemplate = Meteor.call("createItemTemplate", {
			name: txtTemplateName.value, 
			properties: taProperties.value.split("\n")
			},
			function(error, id) {
				console.log("redirecting to viewItemTemplate" + id);
				Meteor.Router.to("viewItemTemplate", id);
				console.log("finished redirection");
			});
			

		//var newTemplate = {};
		//newTemplate.name = txtTemplateName.value;
		//var properties = taProperties.value.split('\n');
		//newTemplate.properties = [];
		//for (var i = 0; i < properties.length; i++) {
		//	newTemplate.properties.push(properties[i]);
		//}
		//console.log(newTemplate);
		//TemplateGroup.insert(newTemplate);
		//console.log('Item Inserted');
	}
});
