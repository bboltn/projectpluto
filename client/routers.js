Meteor.Router.add({
  "/": "home",
  "/template/create": "createTemplate",
  "/inventorygroup/create": "createInventoryGroup",
  "/template/view/": "viewItemTemplateAll",
  "/template/view/:_id": {
	  to: "viewItemTemplate",
	  and: function(id){ console.log("the id: " + id); Session.set("currentItemTemplateId", id); }
  },
  "/inventorygroup/view/": "viewInventoryGroupAll",
  "/inventorygroup/view/:_id": {
	  to: "viewInventoryGroup",
	  and: function(id){ Session.set("currentInventoryGroupId", id); }
  }
});
