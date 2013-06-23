if(Meteor.users.find().count() === 0) {
	var now = new Date().getTime();

	var brianId = Accounts.createUser({username:"brian",
									email:"brian.bolton@gmail.com", 
									password: "password"});
	var patrickId = Accounts.createUser({username:"patrick",
									email:"mpatricks@gmail.com",
									password:"password"});

	var jonsgreenId = Accounts.createUser({username:"jon",
										  email: "jonsgreene@gmail.com",
										  password: "password"});
}

if(itemTemplateCol.find().count() == 0) {

	var trackingFields = ["Check In", "Condition Returned",
						"Check Out","Condition Given",
						"Lost","Archive","Unassociated"];

	var musicId = itemTemplateCol.insert({
				name: "Music Instruments",
				properties: ["Name","Serial","Brand","Notes","Condition","Owner",
							"Grade Level"]
	});

	var sheetId = itemTemplateCol.insert({
				name: "Sheet Music",
				properties: ["Title","Composer","Difficulty","Voicing","Ensemble",
							"Genre","Notes"]
	});

	inventoryGroupCol.insert({
		name: "Flutes",
		defaultTemplateId: musicId
	});

	inventoryGroupCol.insert({
		name: "Trumpets",
		defaultTemplateId: musicId
	});

	inventoryGroupCol.insert({
		name: "Moby",
		defaultTemplateId: sheetId
	});
}
