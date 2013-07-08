Meteor.Router.add({
  "/": "home",
  "/qrcodes/view": "viewQrCodes",
  "/template/create": "createTemplate",
  "/inventorygroup/create": "createInventoryGroup",
  "/template/view/": "viewItemTemplateAll",
  "/template/view/:_id": {
	to: "viewItemTemplate",
	and: function(id){ Session.set("currentItemTemplateId", id); }
  },
  "/template/edit/:_id": {
	to: "editItemTemplate",
	and: function(id){
		Session.set("currentItemTemplateId", id);
	}
  },
  "/inventorygroup/view/": "viewInventoryGroupAll",
  "/inventorygroup/view/items/:_id": {
	  to: "viewInventoryGroupItems",
	  and: function(id){ Session.set("currentInventoryGroupId", id)}
  },
  "/inventorygroup/view/:_id": {
	  to: "viewInventoryGroup",
	  and: function(id){ Session.set("currentInventoryGroupId", id); }
  },
  "/inventorygroup/edit/:_id": {
	to: "editInventoryGroup",
	and: function(id){ Session.set("currentInventoryGroupId", id); }
  },
  "/item/view/:_id":{
	to: "viewTrackedItem",
	and: function(id){
		Session.set("currentTrackedItemId", id);
	}
  },
  "/item/:action/:_id": {
	  to: "createTrackedItem",
	  and: function(action, _id){
		  Session.set("currentTrackedItemAction", action);
		  Session.set("currentLookupId", _id);
		}
  },
  "/item/view/":"viewTrackedItemAll"  
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
