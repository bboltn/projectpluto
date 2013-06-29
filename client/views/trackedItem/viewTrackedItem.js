Template.viewTrackedItem.helpers({
	currentTrackedItem: function(_id){
		if(_id)
			var _id = Session.get("currentTrackedItemId");
		return trackedItemCol.findOne({_id:_id});
	}
});

Template.viewTrackedItem.events({
	"click .delete": function(e) {
		e.preventDefault();

		if (confirm("Delete this item?")) {
			Meteor.call("deleteTrackedItem", {
				_id: e.currentTarget.dataset.id},function(){ 
					Meteor.Router.to("viewTrackedItemAll");
			});
		}
	}
});
