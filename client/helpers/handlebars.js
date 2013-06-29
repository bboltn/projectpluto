Handlebars.registerHelper("debug", function(optionalValue) {
	console.log("Current Context");
	console.log("====================");
	console.log(this);

	if (optionalValue) {
		console.log("Value");
		console.log("====================");
		console.log(optionalValue);
	}
});

Handlebars.registerHelper("eachProperty", function(context, options) {
	var ret = "";
	for(var prop in context)
		ret += options.fn({property:prop,value:context[prop]});
    return ret;
});
