 /*@author: Solomon Kareem
  *@date: Nov 2015
	*@description: build resume page from json file 
	*/

//personal data
var bio = {
	"name":"Solomon Kareem",
	"role":"Software Apostle",
	"welcomeMessage":"To create excellence software solutions that solve global challenges",
	"contacts":{
		"mobile":"+(234) 813-180-7063",
		"email":"solomon.kareem@gmail.com",
		"github":"solohub",
		"twitter":"@no1solo",
		"location":"Oworoshoki, Lagos"
	},
	"skills":[
		"Excellence","MsOffice","Web Developer","Mobile Developer","Data Analyst"
	],
	"biopic":"./images/kareem.jpg"
};

//education data
var education = {
	"schools":[
		{
			"name":"American University of Nigeria",
			"location":"Yola, Adamawa",
			"degree":"BSc",
			"majors":["Computer Science"],
			"minors":["Mathematics"],
			"date":"Dec 2013",
			"url":"http://www.aun.edu.ng/"
		},
		{
			"name":"Aptech Computer Education",
			"location":"maryland, Lagos",
			"degree":"oND",
			"majors":["Information Systems Management"],
			"date":"Jan 2010",
			"url":"http://www.aptech-ng.com/ace/index.html"
		}
	],
	"onlineCourses":[
		{
			"title":"javascript basics",
			"school":"Udacity",
			"date":"Nov 2015",
			"url":"https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title":"Responsive Images",
			"school":"Udacity",
			"date":"Nov 2015",
			"url":"https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title":"Responsive Web Design Fundamentals",
			"school":"Udacity",
			"date":"Oct 2015",
			"url":"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title":"Intro to HTML and CSS",
			"school":"Udacity",
			"date":"Sep 2015",
			"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
		}
	]
};

//work data
var work = {
	"jobs":[
		{
			"employer":"findX",
			"title":"CEO / Software Apostle",
			"location":"Ikoyi, Lagos",
			"date":"Nov 2015",
			"description":"Leader of findX and avocate of software solutions"
		},
		{
			"employer":"ExxonMobil",
			"title":"Technical Assistance",
			"location":"Lekki, Lagos",
			"date":"Dec 2015",
			"description":"Achive and analysis data for facility services"
		},
		{
			"employer":"Google",
			"title":"Mobile Developer",
			"location":"Mountainview, CA",
			"date":"Jan 2017",
			"description":"Develop mobile applications"
		}
	]
};

//project portfolio data
var project = {
	"projects":[
		{
			"title":"Matrix Petrochem aNew",
			"date":"Nov 2015",
			"description":"Complete redesign of website",
			"image":"./images/197x148.gif"
		},
		{
			"title":"MoniTrack",
			"date":"Nov 2015",
			"description":"Keeping track of the money spent",
			"image":"./images/197x148.gif"
		},
		{
			"title":"WebicYouth",
			"date":"Dec 2015",
			"description":"Ministorial profile display and data management services",
			"image":"./images/197x148.gif"
		}
	]
};

//transform name from bio by 
//capitalizing second name and first letter of first name
//inName(solomon kareem) => return Solomon KAREEM
function inName () {
    var formattedName = "";
    // Your code goes here!
    var nameArray = bio.name.split(" ");
    nameArray[0] = nameArray[0].toLowerCase();
    nameArray[0] = nameArray[0].replace(nameArray[0].charAt(0),nameArray[0].charAt(0).toUpperCase());
    
    nameArray[1] = nameArray[1].toUpperCase();
    formattedName = nameArray[0] +" "+ nameArray[1];
    
    // Don't delete this line!
    return formattedName;
}

bio.display = function() {
	//display name and role
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = headerName + headerRole;
	$("#header").prepend(formattedName);

	//display contact info from bio
	var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var email = HTMLemail.replace("%data%",bio.contacts.email);
	var github = HTMLgithub.replace("%data%",bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var location = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedContact = mobile + email + github + twitter + location;
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);

	//display bio image and message
	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPicMsg = bioPic + welcomeMsg;
	$("#header").append(formattedPicMsg);

	//display bio skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = "";
		for(skill in bio.skills){
			formattedSkills += HTMLskills.replace("%data%", bio.skills[skill]);
		}
		$("#skills").append(formattedSkills);
	}
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var school in education.schools){
		if (education.schools.hasOwnProperty(school)) {
			var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var schoolNameLink = schoolName.replace("#",education.schools[school].url);
			var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var schoolDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
			var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var schoolMajor = "";
			try{
				education.schools[school].majors.forEach(function(major){
					schoolMajor += HTMLschoolMajor.replace("%data%",major);});
			}catch(e){}
			var formattedSchoolInfo = schoolNameLink + schoolDegree + schoolDates + schoolLocation + schoolMajor;
			$(".education-entry").append(formattedSchoolInfo);
		}
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (var course in education.onlineCourses){
		if (education.onlineCourses.hasOwnProperty(course)) {
			var title = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var titleUrl = title.replace("#",education.onlineCourses[course].url);
			var school = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			var date = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
			var url = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
			var formattedonlineClass = titleUrl + school + date + url;
			$(".education-entry:last").append(formattedonlineClass);
		}
	}
};

work.display = function() {
	for(job in work.jobs){

		if (work.jobs.hasOwnProperty(job)) {
			$("#workExperience").append(HTMLworkStart);

			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var workTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var workDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
			var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			var workScope = workEmployer + workTitle + workLocation + workDates + workDescription;
			$(".work-entry:last").append(workScope);
		}
	}
};

project.display = function() {
	for(var work in project.projects){
		if (project.projects.hasOwnProperty(work)) {
			$("#projects").append(HTMLprojectStart);

			var projectTitle = HTMLprojectTitle.replace("%data%", project.projects[work].title);
			var projectDate = HTMLprojectDates.replace("%data%", project.projects[work].date);
			var projectDescription = HTMLprojectDescription.replace("%data%", project.projects[work].description);
			var projectImage = HTMLprojectImage.replace("%data%", project.projects[work].image);

			var projectGroup = projectTitle + projectDate + projectDescription + projectImage;

			$(".project-entry:last").append(projectGroup);

		};
	}
};

bio.display();
education.display();
work.display();
project.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap)