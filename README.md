Integrated	Digital	Services	Lab	 – Taiwan	Tech	(NTUST)
Programming	#1:	Web	Service	
Development
Nai-Wei	Lo;	Alexander	Yohan 					
Fall 2018
08 Fall
1 Learning Goals
• Create	a	simple	database	and	use	it	in	a	dynamic	website.
• Create	a	simple	RESTful	web	service	API
• Connect	the	created	web	service	to	a	remote	database	system



4.2.2 Prepare a	database	connection	class	for	the	API
Generally,	the	API	that	we	build	will	offer	a	number	of	services,	such	as	retrieving	a	specific	
user’s	data	from	the	database,	to	the	clients.	In	this	case,	it	is	necessary	to	prepare	a	class	or	
method	to	handle	the	database	connection	used	in	the	API	that	we	design.	Listing	2	shows a	
helper	class	to	manage	the	database	connection	used	in	this	example.

4.2.3 Extend the	basic	REST	API	class	usage
The	abstract	RestAPI	class	created	in	Listing	1	only	provides	the	basic	structure	of	the	REST	
API.	It	still	needs	to	be	polished	and	extended	so	the	API’s	client	could	easily	use	the	API	to	
access	the	service	that	we	create	through	this	API.	Let’s	say	that	we	would	allow	the	clients	of	
our	service	to	access	the	users data	stored	in	our	service’s	database.	In	this	example,	a	
UserAPI class	is	created	to	provide	this	service,	in	which	the	UserAPI	class	will	extend	the	
basic	functionality	of	the	abstract	RestAPI	class	that	has	been	created	before.	Listing	3	shows	
the	sample	source	code	for	the	UserAPI	class.

The	sample	code	in	Listing	3	shows	the	usage	of	GET	method	in	REST	architecture	design.	In	
case	of	the	client	provide	the	requested	user’s	username	as	the	parameter	during	the	method	
call,	the	API will	look	up	for	the	requested	user’s	data	and	return	it	to	the	client.	However,	if	
the	client	does	not	provide	any	specific	username,	the	API	will	assume	that	the	client	is	trying	
to	request	the	collection	of	users	data	stored	in	our	service	database.
Note	1:	The	source	code	used	in	Listing	3	should	only	be	used	for	practice	and	to	gain	a	better	
understanding	on	the	REST	architecture	design.
Note	2:	You	should	do	some	modifications	on	the	sample	source	code	if	you	plan	to	release	the	
API	to	the	public.
Now,	let	us	dig	into	the	detail	of	the	functionality	of	UserAPI	class.	In	the	UserAPI	class,	an	
object	from	class	UserController is	used	to	make	a	connection	to	the	database	server	and	
process	the	client’s	request.	Two	sample	source	codes	used	to	query	the	user’s	data	are	listed	
in	Listing	4.

Once you	have	designed	the	REST	API,	the	next	thing	is	to	communicate	your	API	client	on	
how	to	utilize	the	API	you	have	built.	In	this	example,	the	REST	API	that	has	been	designed	is	
called	using	AJAX	in	JQuery	(see	Listing	5).

4.4 Change	the	database	connection	using	remote	database
To	use	database	service	that	is	not	located	on	your	local	machine,	change	the	database	
configuration	of	your	web	service	or	web	server	to	the	remote	database	address.
In	this	example,	you	can	use	the	following	testing	database	configuration	to	test	your	simple	
web	service.
Database	hostname 140.118.110.32:53306
Database	username ws_user
Database	password ws_fall108
Database	name ilibrary_test
5 Tasks

Do	not	forget	to	provide	the	URL of	both	your	web	service	and	simple	client	website	in	
your	report	document!
Sample	request	#1: curl	--request	GET	--header	"Content-Type:application/json"	
http://{your_API_URI}/api/books
Sample	response	#1: {
		"error":	false,
		"message": "",
		"books":	[
				{
						"id":	1,
						"title":	"Building	RESTful	Web	Services	with	PHP7",
						"isbn":	"9781787127746",
						"author":	"Haafiz	Waheed-ud-din	Ahmad",
						"publisher":	"Packt	Publishing",
						"publication_year":	2017
				},
				{
						"id":	2,
						"title":	"RESTful	Web	Services	Cookbook:	Solutions	for	Improving	Scalability	and	
Simplicity",
						"isbn":	"9780596801687",
						"author":	"Subbu	Allamaraju",
						"publisher":	"Yahoo	Press",
						"publication_year":	2010
				}
		]
}
Sample	request	#2: curl	--request	GET	--header	"Content-Type:application/json"	
http://{your_API_URI}/api/books/2
Sample	response	#2:
{
		"error":	false,
		"message":	"",
		"book":	{
				"id":	2,
				"title":	"RESTful	Web	Services	Cookbook:	Solutions	for	Improving	Scalability	and	
Simplicity",
				"isbn":	"9780596801687",
				"author":	"Subbu	Allamaraju",
				"publisher":	"Yahoo	Press",
				"publication_year":	2010
		}
}
