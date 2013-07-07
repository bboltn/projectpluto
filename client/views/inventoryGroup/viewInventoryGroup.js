Template.viewInventoryGroup.helpers({
	currentInventoryGroup: function(_id){
		if(!_id)
			var _id = Session.get("currentInventoryGroupId");

		var inventoryGroupItem = inventoryGroupCol.findOne({_id:_id});
		var itemTemplateName = 
			itemTemplateCol.findOne(
				{_id: inventoryGroupItem.defaultTemplateId}).name;
		inventoryGroupItem.itemTemplateName = itemTemplateName;
		return inventoryGroupItem;

	}
});

Template.viewInventoryGroup.events({
	"click .delete": function(e) {
		e.preventDefault();

		if (confirm("Delete this inventory group?")) {
			Meteor.call("deleteInventoryGroup", {
				_id: e.currentTarget.dataset.id},function(){ 
					Meteor.Router.to("viewInventoryGroupTemplateAll");
			});
		}
	}
});

