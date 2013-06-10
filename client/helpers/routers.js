Meteor.Router.add({
  "/": "home",
  "/template/create": "createTemplate",
  "/inventorygroup/create": "createInventoryGroup",
  "/template/view/": "viewItemTemplateAll",
  "/template/view/:_id": {
	  to: "viewItemTemplate",
	  and: function(id){ Session.set("currentItemTemplateId", id); }
  },
  "/inventorygroup/view/": "viewInventoryGroupAll",
  "/inventorygroup/view/:_id": {
	  to: "viewInventoryGroup",
	  and: function(id){ Session.set("currentInventoryGroupId", id); }
  }
});

Meteor.Router.filters({
	"requireLogin": function(page){
		if (Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'loading';
		else
			return 'accessDenied';
	},

	"clearErrors": function(page){
		Meteor.Errors.clear();
		return page;
	}
});

Meteor.Router.filter("clearErrors");
Meteor.Router.filter("requireLogin", {except: "home"});
