import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-my-work",
	templateUrl: "./my-work.component.html",
	styleUrls: ["./my-work.component.css"],
})
export class MyWorkComponent implements OnInit {
	modalenabled = false;

	public projects = [
		{
			name: "Violet Lattes",
			imgsrc: "https://i.imgur.com/dHcZhbn.gif",
			codebaseLink: "https://github.com/DaniDelia253/violet-lattes",
			deployedLink: "https://sheltered-castle-99209.herokuapp.com/",
		},
		{
			name: "Homework Tracker",
			imgsrc: "https://i.imgur.com/IpUigx0.gif",
			codebaseLink: "https://github.com/DaniDelia253/homework-tracker",
			deployedLink: "https://quiet-island-37482.herokuapp.com/login",
		},
		{
			name: "Movie Night",
			imgsrc: "https://i.imgur.com/Z3XlaNi.gif",
			codebaseLink: "https://github.com/DaniDelia253/movie-night",
			deployedLink: "https://danidelia253.github.io/movie-night/",
		},
		{
			name: "Weather Dashboard",
			imgsrc: "https://i.imgur.com/69vIYYz.gif",
			codebaseLink: "https://github.com/DaniDelia253/weather-dashboard",
			deployedLink: "https://danidelia253.github.io/weather-dashboard/",
		},
		{
			name: "Note Taker",
			imgsrc: "https://i.imgur.com/mhb1S30.gif",
			codebaseLink: "https://github.com/DaniDelia253/note-taker",
			deployedLink: "https://note-taker-52y6.onrender.com",
		},
		{
			name: "Password Generator",
			imgsrc: "https://i.imgur.com/XSqTrKr.gif",
			codebaseLink:
				"https://github.com/DaniDelia253/random-password-generator",
			deployedLink:
				"https://danidelia253.github.io/random-password-generator/",
		},
		{
			name: "Code Quiz",
			imgsrc: "https://i.imgur.com/r3A8g5d.gif",
			codebaseLink: "https://github.com/DaniDelia253/code-quiz",
			deployedLink: "https://danidelia253.github.io/code-quiz/",
		},
		{
			name: "Scheduler",
			imgsrc: "https://i.imgur.com/wj40Bt7.gif",
			codebaseLink: "https://github.com/DaniDelia253/work-day-scheduler",
			deployedLink: "https://danidelia253.github.io/work-day-scheduler/",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
