
	
	var bio = {
		 "name" : "Xavier Soler",
		 "role" : "Web developer",
		 "welcomeMessage" : "A web developer based in Barcelona",
		 "biopic" : "Lots of years of expirience as a Web developer.",
		 "contacts" : {
			 "mobile" : "600503303",
			 "email" : "xaviersoler@gmail.com",
			 "github" : "xavisoler",
			 "twitter" : "mediopirzel",
			 "location" : "Barcelona"
		 },
		 "skills" : ["design", "programming", "CSS", "PHP", "JavaScript"]
		 
	 };
	 
	
	
	var work = {
		"jobs" : [
			{
				"employer" : "Oasyssoft",
				"title"	: "Web designer chief",
				"location" : "Barcelona",
				"description": "My very first job"
			},
			{
				"employer" : "Properazzi",
				"title"	: "Web designer chief",
				"location" : "Barcelona",
				"description": "First time in a startup"
			},
			{
				"employer" : "masterASP",
				"title"	: "Web designer chief",
				"location" : "Barcelona",
				"description": "Current job"
			}	]
		
	};
	
	
	var projects = {
		"projects" : [
			{
				"title"	: "eBD",
				"dates" : "2011-2013",
				"description": "e-Business designer",
				"images" : ["img1.jpg", "img2.jpg", "img3.jpg"]
			},
			{
				"title"	: "masterBookings",
				"dates" : "2015-2016",
				"description": "Booking reservation service",
				"images" : ["img1.jpg", "img2.jpg", "img3.jpg"]
			}
		]
	};
	
	
	
	var education = {
		"schools" : [
			{
				"name" : "LAI",
				"location" : "Barcelona",
				"degree dates" : "1998-2002",
				"url" : "http://www.uvic.cat",
				"majors" : ["Disseny", "maquetacio", "programacio"]
			},
					{
				"name" : "Joviat",
				"location" : "Manresa",
				"degree dates" : "1990-1995",
				"url" : "http://www.joviat.com",
				"majors" : ["Mates", "física", "química"]
			}
			
		],
		
		"onlineCourses" : [
			{
				"title" : "Javascript Essencial",
				"school" : "Lynda",
				"dates" : "Online",
				"url" : "http://www.lynda.com"	
			},
			{
				"title" : "Javascript Basics",
				"school" : "Udacity",
				"dates" : "Online",
				"url" : "http://www.udacity.com"	
			}
		]
	};
	
	
	
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);


	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formatedSkill);
		
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formatedSkill);
		
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formatedSkill);
		
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formatedSkill);
		
	};
	
function displayWork() {
	var feines = work.jobs;
	
	if(feines.length > 0) {
		
		$("#header").append(HTMLworkStart);
		for(feina in feines) {
			var nameEmployer = feines[feina]['employer'];
			var formattedEmployer = HTMLworkEmployer.replace("%data%", nameEmployer);
			var titleEmployer = feines[feina]['employer'];
			var formattedTitle = HTMLworkTitle.replace("%data%", titleEmployer);
			
			var locationEmployer = feines[feina]['location'];
			var formattedLocationEmployer = HTMLworkLocation.replace("%data%", locationEmployer);
			var descriptionEmployer = feines[feina]['description'];
			var formattedDescriptionEmployer = HTMLworkDescription.replace("%data%", descriptionEmployer);
			
			var formatedEmployerTitle = formattedEmployer + formattedTitle + formattedLocationEmployer + formattedDescriptionEmployer;
			
			$(".work-entry:last").append(formatedEmployerTitle);
			
		}
		
	}

};

displayWork();

$(document).click(function(loc) {
  // your code goes here
  
  var x = loc.pageX;
  var y = loc.pageX;
  
  logClicks(x,y);
})


