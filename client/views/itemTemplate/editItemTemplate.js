Template.editItemTemplate.helpers({
	currentItemTemplate: function(id) {
		if(!id)
			var id = Session.get("currentItemTemplateId");

		return itemTemplateCol.findOne(id);

	},
	formatProperties: function(properties) {
		var val1 = properties;
		var returnval = "";
		for(var i = 0; i < val1.length; i++)
			returnval += val1[i] + "\n";

		return returnval;

	}
});

Template.editItemTemplate.events({
	"submit form": function(e){
		e.preventDefault();

		//createItemTemplate

		var formContent = {
			_id: $(e.target).find("[name=_id]").val(),
			properties: $(e.target).find("[name=taProperties]").val().split("\n"),
			name: $(e.target).find("[name=txtName]").val()
		}

		Meteor.call("createItemTemplate", formContent, function(error, id) {
			if(error)
				Meteor.Errors.throw(error.reason);
			else
				Meteor.Router.to("viewItemTemplate", id);
		});
	}
});
