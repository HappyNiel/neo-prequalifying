export class SessionData {

	/**
	 * Array containing all session data
	 */
	public sessions = [
		{ id: 1, sessionId: 1234, startTime: "08:00" },
		{ id: 2, sessionId: 4567, startTime: "12:00" },
		{ id: 3, sessionId: 8901, startTime: "17:00" },
		{ id: 4, sessionId: 2345, startTime: "20:00" }
	];

	public getSessionStartTime(id: number): string {
		return this.sessions[id - 1].startTime;
	}

	public getAllSessionInfo(id: number): {} {
		return this.sessions[id - 1];
	}

	public getSessionId(id: number): number {
		return this.sessions[id - 1].sessionId;
	}
}
