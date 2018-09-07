import { Component, OnInit } from "@angular/core";
import { SessionData } from "../services/session-data.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-results",
	templateUrl: "./results.component.html",
	styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
	sessionInfo: {};
	sessionId: number;

	constructor(private sessionData: SessionData, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.sessionId = params["id"];
			// this.sessionInfo = this.getSessionInfo(this.sessionId);
		});
	}

	getSessionInfo(id: number): {} {
		return this.sessionData.getSessionId(id);
	}

	getSessionStartTime(id: number): string {
		return this.sessionData.getSessionStartTime(id);
	}
}
