

$(document).ready(function() {
	Meteor.call('toDataURL', 'http://www.fakeurl.com?id=1234-4545-3234-3454', function(err, data) {
		var cv = document.getElementById('qrCanvas');
		var ctx = cv.getContext('2d');

		var img = new Image;
		img.onload = function(){
		  ctx.drawImage(img,0,0);
		};
		img.src = data;
	});
})