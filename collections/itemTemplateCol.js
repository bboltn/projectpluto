itemTemplateCol = new Meteor.Collection("itemTemplateCol");

Meteor.methods({
	createItemTemplate: function(itemTemplateAttributes){
		
		var newTemplate = { name: itemTemplateAttributes.name };

		var properties = itemTemplateAttributes.properties;
		
		newTemplate.properties = [];
		for (var i = 0; i < properties.length; i++) {
			newTemplate.properties.push(properties[i]);
		}
		
		console.log(newTemplate);
		templateId = itemTemplateCol.insert(newTemplate);
		
		return templateId;
	}
});

