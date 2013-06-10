Template.createTemplate.events({
	'click #btnCreate': function(e) {
		e.preventDefault();

		//call the meteor method createItemTemplate
		Meteor.call("createItemTemplate", {
			name: txtTemplateName.value, 
			properties: taProperties.value.split("\n")
			},
			function(error, id) {
				if(error)
					Meteor.Errors.throw(error.reason);
				else
					Meteor.Router.to("viewItemTemplate", id);
			}
		);
	}
});
