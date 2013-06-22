itemTemplateCol = new Meteor.Collection("itemTemplateCol");

Meteor.methods({
	createItemTemplate: function(itemTemplateAttributes){

		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create a template");

		if(!itemTemplateAttributes.name)
			throw new Meteor.Error(422, "Please provide a name.");

		var properties = _.filter(itemTemplateAttributes.properties,
								  function(prop){ return prop !== ""; });
		if(properties == 0)
			throw new Meteor.Error(422, "Please provide properties.");

		if(itemTemplateAttributes._id)
			return itemTemplateCol.update({
				_id: itemTemplateAttributes._id
			},{
				name: itemTemplateAttributes.name,
				properties: properties
			});
		else
			return itemTemplateCol.insert({
				name: itemTemplateAttributes.name,
				properties: properties
			});
	},
	deleteItemTemplate: function(id){
		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create a template");

		if(!id)
			throw new Meteor.Error(422, "Please provide an id");

		itemTemplateCol.remove(id);
	}
});

itemTemplateCol.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});
