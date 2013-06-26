inventoryGroupCol = new Meteor.Collection("inventoryGroupCol");

Meteor.methods({
	createInventoryGroup: function(inventoryGroupAttributes){
		
		if(!Meteor.user())
			throw new Meteor.Error(401, "Please sign in to create an inventory " + 
								   "group.");

		if(!inventoryGroupAttributes.name)
			throw new Meteor.Error(422, "Please provide a name");

		if(!inventoryGroupAttributes.defaultTemplateId)
			throw new Meteor.Error(422, "Please select an inventory template");

		if(inventoryGroupAttributes._id)
		{
			//this is an update
			return inventoryGroupCol.update({
				_id: inventoryGroupAttributes._id
			},{
				name: inventoryGroupAttributes.name,
				defaultTemplateId: inventoryGroupAttributes.defaultTemplateId
			});
		}
		else
		{
			//this is an insert
			return inventoryGroupCol.insert({
				name: inventoryGroupAttributes.name,
				defaultTemplateId: inventoryGroupAttributes.defaultTemplateId});
		}
	}
});

inventoryGroupCol.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	remove: function(userId, doc){
		return !! userId;
	}
});
