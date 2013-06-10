Template.viewItemTemplate.helpers({
	currentItemTemplate: function(id){
		if(!id)
			var id = Session.get("currentItemTemplateId");

		return itemTemplateCol.findOne(id);
	}
});
