import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-contact-me",
	templateUrl: "./contact-me.component.html",
	styleUrls: ["./contact-me.component.css"],
})
export class ContactMeComponent implements OnInit {
	contactMethods = [
		{
			title: "Email",
			iconClassList: "bi bi-envelope-at",
			link: "mailto: danidavis321@gmail.com",
		},
		{
			title: "Github",
			iconClassList: "bi bi-github",
			link: "https://github.com/DaniDelia253",
		},
		{
			title: "Linkedin",
			iconClassList: "bi bi-linkedin",
			link: "https://www.linkedin.com/in/danidelia253/",
		},
		{
			title: "Resume",
			iconClassList: "bi bi-paperclip",
			link: "https://drive.google.com/file/d/1SplsSEwTaRseta4t3bL_qiLr89Ha7PAX/view?usp=share_link",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
