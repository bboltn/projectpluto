trackedItemCol = new Meteor.Collection("trackedItemCol");

Meteor.methods({
	createTrackedItem: function(trackedItemAttributes){

		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create an item");

		if(!trackedItemAttributes.itemValues)
			throw new Meteor.Error(422, "Please provide at least one value.");

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
	deleteTrackedItem: function(id){
		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create a template");

		if(!id)
			throw new Meteor.Error(422, "Please provide an id");

		trackedItemCol.remove(id);
	}
});

trackedItemCol.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});
