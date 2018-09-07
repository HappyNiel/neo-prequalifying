import { Component, OnInit } from "@angular/core";
import { SessionData } from "../services/session-data.service";
import { DriverInfo } from "../classes/driver-data.model";

@Component({
	selector: "app-sessions",
	templateUrl: "./sessions.component.html",
	styleUrls: ["./sessions.component.scss"]
})
export class SessionsComponent implements OnInit {
	sessions = [];

	allData = [
		new DriverInfo(1, "name", undefined),
		new DriverInfo(2, "Name2", undefined)
	];

	constructor(private sessionData: SessionData) {}

	ngOnInit() {
		this.sessions = this.sessionData.sessions;

		console.log(this.allData);
	}
}
