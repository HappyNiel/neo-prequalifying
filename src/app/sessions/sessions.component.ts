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

	constructor(private sessionData: SessionData) {}

	ngOnInit() {
		this.sessions = this.sessionData.sessions;
		this.processAllSessionData();

		console.log(this.sessionData.getParsedSessionData(4));
	}

	private processAllSessionData(): void {
		this.processSingleSessionData(1);
		this.processSingleSessionData(2);
		this.processSingleSessionData(3);
		this.processSingleSessionData(4);
	}

	private processSingleSessionData(sessionId: number): void {
		const resultsObject = this.sessionData.getAllSessionInfo(sessionId);
		const resultsArray = Object.keys(resultsObject);

		for (let i = 0; i < resultsArray.length; i++) {
			const driverId = this.sessionData.getDriverId(sessionId, i);
			const driverName = this.sessionData.getDriverName(sessionId, i);
			const driverlapData = this.sessionData.getDriverLapData(sessionId, i);

			if (null !== driverId) {
				if (sessionId === 1) {
					this.sessionData.parsedDataSession1.push(new DriverInfo(driverId, driverName, driverlapData));
				}
				if (sessionId === 2) {
					this.sessionData.parsedDataSession2.push(new DriverInfo(driverId, driverName, driverlapData));
				}
				if (sessionId === 3) {
					this.sessionData.parsedDataSession3.push(new DriverInfo(driverId, driverName, driverlapData));
				}
				if (sessionId === 4) {
					this.sessionData.parsedDataSession4.push(new DriverInfo(driverId, driverName, driverlapData));
				}
			}
		}
	}
}
