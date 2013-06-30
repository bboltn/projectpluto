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

	var fluteId = inventoryGroupCol.insert({
		name: "Flutes",
		defaultTemplateId: musicId
	});

	var trumpetId = inventoryGroupCol.insert({
		name: "Trumpets",
		defaultTemplateId: musicId
	});

	var mobyId = inventoryGroupCol.insert({
		name: "Moby",
		defaultTemplateId: sheetId
	});

	var fluteItemId = trackedItemCol.insert({
		itemValues: {
			"Name": "Flute1",
			"Serial": "123456ABC",
			"Brand": "Boston",
			"Notes": "the flute sounds like a bird",
			"Condition": "perfect",
			"Owner": "MCSD",
			"Grade Level": "Senior"
		},
		baseItemTemplateId: musicId,
		parentInventoryGroup: fluteId,
		trackingFields: {
			"Check In": true,
			"Condition Returned": "perfect",
			"Check Out": false,
			"Condition Given": "perfect",
			"Lost": false,
			"Archive": false,
			"Unassociated": false
		}
	});
}
