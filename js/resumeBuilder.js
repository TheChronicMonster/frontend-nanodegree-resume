var bio = {
	"name" : "JP Miller",
	"role" : "Executive Content Director at www.urbangamingelite.com",
	"welcomeMessage" : "I love writing, coding and learning. My goal is to create excellent user experiences.",
	"contactInfo" : {
		"twitter" : "@theChronicMonst",
		"email" : "legendzing@gmail.com",
		"mobile" : "903-293-6594",
		"location" : "Madison, WI",
		"github" : "github.com/theChronicMonster",
		"linkedIn" : "linkedin.com/in/jpmillerii",
		"blog" : "http://www.theChronicMonster.com",
		"relocation" : "Willing to relocate"
	},
	"bioPic" : "images/bioImage.jpg",
	"skills" : ["writing", "marketing", "management", "front-end design & development"],
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
		var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);

		var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedBlog + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedBlog + formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Urban Gaming Elite",
			"title": "Executive Content Director",
			"dates": "August 2014 - Present",
			"description": "I strategize with UGE's founder, Alex, manage our freelance writers and push live content to the website.",
			"location" : "Madison, WI"
		},
		{
			"employer": "Self Employed",
			"title": "Freelance Writer",
			"dates": "February 2013 - Present",
			"description": "I manage and motivate myself to produce quality content for the internet for my clients.",
			"location" : "Janesville, WI"
		},
		{
			"employer": "Self Employed",
			"title": "Independent Courier",
			"dates": "January 2012 - December 2014",
			"description": "I delivered consumer and agricultural goods as well as bank deposits on regularly scheduled routes in the Greater Chicago Region.",
			"location" : "Chicago, IL"
		}
	]
}

var education = {
	"education": [
		{
			"name" : "Udacity",
			"degree" : "Nanodegree",
			"major" : "Front-End Web Development",
			"societies" : "Inaugural Cohort",
			"url" : "http://www.udacity.com",
			"location" : "San Francisco, CA"
		},
		{
			"name" : "The Second City",
			"degree" : "One Year Certificate",
			"major" : "Improvisational Acting",
			"societies" : "The Scribes",
			"url" : "http://www.secondcity.com/courses/chicago/adult/",
			"location" : "Chicago, IL"
		},
		{
			"name" : "Texas A&M University-Texarkana",
			"degree" : "Bachelor",
			"major" : "Applied Arts & Sciences",
			"societies" : "Student Leadership Development Program",
			"url" : "http://tamut.edu/index.php",
			"location" : "Texarkana, TX"
		},
		{
			"name" : "Texarkana College",
			"degree" : "Associate",
			"major" : "Business Marketing",
			"societies" : "Phi Theta Kappa",
			"url" : "https://www.texarkanacollege.edu/",
			"location" : "Texarkana, TX"
		}],
		displayEducation: function() {
			for (school in education.education) {
				var edu = education.education[school];
				$("#education").append(HTMLschoolStart);
				var formattedName = HTMLschoolName.replace("%data%", edu.name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", edu.degree);
				var formattedMajor = HTMLschoolMajor.replace("%data%", edu.major);
				var formattedLocation = HTMLschoolLocation.replace("%data%", edu.location);

				$(".education-entry:last").append(formattedName + formattedDegree);
				$(".education-entry:last").append(formattedMajor);
				$(".education-entry:last").append(formattedLocation);
			}
		}
}

var projects = {
	"projects": [
		{
			"title" : "Portfolio Mockup",
			"dates" : "November 2014",
			"description" : "I created a web friendly mockup from a pdf file. Project utilizes HTML, Bootstrap and a JavaScript Modal.",
			"images" : ["https://github.com/TheChronicMonster/Mug-MockUp/blob/master/images/mug.png"]
		},
		{
			"title" : "Frogger Game Clone",
			"dates" : "February 2015",
			"description" : "A point for nostalgia. I recreated the classic frogger game using boys and bugs.",
			"images" : ["https://github.com/TheChronicMonster/Frogger-Clone/blob/master/images/char-boy.png"]
		},
		{
			"title" : "Website Optimization",
			"dates" : "March 2015",
			"description" : "I began with a very clunky webpage and optimizated it to render within milliseconds.",
			"images" : ["https://github.com/TheChronicMonster/website-optimization/blob/master/views/images/pizza.png"]
		},
		{
			"title" : "Feed Reader Testing with JasmineJS",
			"dates" : "April 2015",
			"description" : "JasmineJS provides an excellent way to bug proof code with test driven development. I used the red-green testing method to ensure that every aspect of the web page worked as expected.",
			"images" : ["http://derickbailey.com/wp-content/uploads/2014/04/jasmine.png"]
		},
		{
			"title" : "Neighborhood Map",
			"dates" : "May 2015",
			"description" : "The Neighborhood Map incorporates the Google Maps and FourSquare APIs to create a map of interesting locations in my community.",
			"images" : ["http://cdn.thedroidguy.com/wp-content/uploads/2013/09/new-google-maps-logo.png"]
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

function locationizer(work) {
	var locArray = [];

	for (job in work.jobs) {
	var newLoc = work.jobs[job].location;
	locArray.push(newLoc);
	}

	return locArray;
}

console.log(locationizer(work));

function internationalizeName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$(".main").append(internationalizeButton);
// Appends google map to resume
$("#mapDiv").append(googleMap);

projects.display = function() {
	for (project in projects.projects) {

		var projs = projects.projects[project];

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projs.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projs.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projs.description);
		$(".prject-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projs.images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

bio.display();
displayWork();
projects.display();
education.displayEducation();
