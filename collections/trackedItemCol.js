trackedItemCol = new Meteor.Collection("trackedItemCol");


trackedItemCol.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});
