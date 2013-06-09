Template.createInventoryGroup.helpers({
	dropdown: function () {
		return itemTemplateCol.find({}, {sort: {name: 1}});
	}
});
