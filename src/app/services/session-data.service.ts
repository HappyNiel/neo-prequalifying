import * as dataSession1 from "../../json/24hseries/results-session1.json";
import * as dataSession2 from "../../json/24hseries/results-session2.json";
import * as dataSession3 from "../../json/session3-results.json";
import * as dataSession4 from "../../json/session4-results.json";
import { DriverInfo } from "../classes/driver-data.model";

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
		{ id: 2, sessionId: 20, startTime: "12:00", sessionResults: dataSession2["driverData"], parsedSessionResults: this.parsedDataSession2},
		// { id: 3, sessionId: 8901, startTime: "17:00", sessionResults: dataSession3["driverData"], parsedSessionResults: this.parsedDataSession3},
		// { id: 4, sessionId: 2345, startTime: "20:00", sessionResults: dataSession4["driverData"], parsedSessionResults: this.parsedDataSession4}
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
