Template.viewItemTemplate.helpers({
	currentItemTemplate: function(){
		return itemTemplateCol.findOne(Session.get("currentItemTemplateId"));
	}
});
