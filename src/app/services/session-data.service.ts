import * as dataSession1 from "../../json/24hseries/season2/results-session1.json";
import * as dataSession2 from "../../json/24hseries/season2/results-session2.json";
import * as dataSession3 from "../../json/24hseries/season2/results-session3.json";
import * as dataSession4 from "../../json/24hseries/season2/fabio.json";
import { DriverInfo } from "../classes/driver-data.model";
import { Injectable } from "@angular/core";

@Injectable()
export class SessionData {

	/**
	 * Array containing all session data
	 */
	public parsedDataSession1: DriverInfo[] = [];
	public parsedDataSession2: DriverInfo[] = [];
	public parsedDataSession3: DriverInfo[] = [];
	public parsedDataSession4: DriverInfo[] = [];

	public sessions = [
		{ id: 1, sessionId: 10, startTime: "08:00", sessionResults: dataSession1["driverData"], parsedSessionResults: this.parsedDataSession1},
		{ id: 2, sessionId: 20, startTime: "13:00", sessionResults: dataSession2["driverData"], parsedSessionResults: this.parsedDataSession2},
		{ id: 3, sessionId: 30, startTime: "18:00", sessionResults: dataSession3["driverData"], parsedSessionResults: this.parsedDataSession3},
		{ id: 4, sessionId: 40, startTime: "special", sessionResults: dataSession4["driverData"], parsedSessionResults: this.parsedDataSession4}
	];

	public getSessionStartTime(id: number): string {
		return this.sessions[id - 1].startTime;
	}

	public getAllSessionInfo(id: number): {} {
		return this.sessions[id - 1].sessionResults;
	}

	public getSessionId(id: number): number {
		return this.sessions[id - 1].sessionId;
	}

	public getDriverId(id: number, index: number): number {
		const results =  this.sessions[id - 1].sessionResults;
		const driverInfo = results[index].importData.drivers;

		if (0 !== driverInfo.length) {
			return driverInfo[0].custid;
		}
		else {
			return null;
		}
	}

	public getDriverName(sessionId: number, index: number): string {
		const results =  this.sessions[sessionId - 1].sessionResults;
		const driverInfo = results[index].importData.drivers;

		if (0 !== driverInfo.length) {
			return driverInfo[0].displayname;
		}
		else {
			return null;
		}
	}

	public getDriverLapData(sessionId: number, index: number): any[] {
		const results =  this.sessions[sessionId - 1].sessionResults;
		const driverLapData = results[index].importData["lapData"];

		return driverLapData;
	}

	public getParsedSessionData(sessionId: number): DriverInfo[] {
		return this.sessions[sessionId - 1].parsedSessionResults;
	}
}
