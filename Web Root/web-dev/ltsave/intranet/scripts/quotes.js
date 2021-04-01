var photos, index;
var num_photos = 9;
photos = new Array();
photos = [
	'<h4>Life is Short, Retirement is Long</h4><p>Our Company Motto</p>',
	'<h4>Independent, Objective, Prudent</h4><p>Our Methodology</p>', 
	'<h4>Imagination is more important than knowledge</h4><p>Albert Einstein</p>',
	'<h4>The C students run the world</h4><p>Harry S. Truman</p>',
	'<h4>Old age is always 15 years older than I am</h4><p>Bernard M. Baruch</p>',
	'<h4>Old age ain\'t no place for sissies</h4><p>Henry Louis Mencken</p>',
	'<h4>Age is opportunity no less than youth itself</h4><p>Henry Wadsworth Longfellow</p>',
	'<h4>Age wrinkles the body. Quitting wrinkles the soul</h4><p>Douglas MacArthur</p>',
	'<h4>Forty is the old age of youth; fifty is the youth of old age</h4><p>Victor Hugo</p>',
];
index = Math.floor(Math.random()*num_photos);
document.write(photos[index]);