trackedItemCol = new Meteor.Collection("trackedItemCol");

trackingFields = ["Check In", "Condition Returned",
						"Check Out","Condition Given",
						"Lost","Archive","Unassociated"];
						
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
			throw new Meteor.Error(401, "Please sign in to delete a tracked item");

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
