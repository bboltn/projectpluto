Template.createInventoryGroup.templates = function () {
	return TemplateGroup.find({}, {sort: {name: 1}});
}