Template.viewItemTemplate.helpers({
	currentItemTemplate: function(id){
		if(!id)
			var id = Session.get("currentItemTemplateId");

		return itemTemplateCol.findOne(id);
	}
});

Template.viewItemTemplate.events({
	"click .delete": function(e) {
		e.preventDefault();

		if (confirm("Delete this item template group?")) {
			Meteor.call("deleteItemTemplate", {_id: e.currentTarget.id},function(){ 
				Meteor.Router.to("viewItemTemplateAll");
			});
		}
	}
});
