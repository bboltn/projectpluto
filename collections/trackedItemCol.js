trackedItemCol = new Meteor.Collection("trackedItemCol");

Meteor.methods({
	createTrackedItem: function(trackedItem){

		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create an item");

		if(trackedItem.itemValues === {})
			throw new Meteor.Error(422, "Please provide at least one value.");

		if(trackedItem._id)
			return trackedItemCol.update({_id: trackedItem._id}, trackedItem);
		else
			return trackedItemCol.insert(trackedItem);
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
