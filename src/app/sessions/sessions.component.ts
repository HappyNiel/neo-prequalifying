import { Component, OnInit } from "@angular/core";
import { SessionData } from "../services/session-data.service";

@Component({
	selector: "app-sessions",
	templateUrl: "./sessions.component.html",
	styleUrls: ["./sessions.component.scss"]
})
export class SessionsComponent implements OnInit {
	sessions = [];

	constructor(private sessionData: SessionData) {}

	ngOnInit() {
		this.sessions = this.sessionData.sessions;
	}
}
