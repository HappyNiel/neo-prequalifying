export class DriverInfo {

	public id: number;
	public name: string;
	public lapData: any[];
	public stints: any[] | undefined;
	public validStints: any[] | undefined;
	public validStintTimes: number[] | undefined;
	public fastestStint: number | undefined;

	constructor(
		driverId: number,
		driverName: string,
		lapData: any[] | undefined
	) {
		this.id = driverId;
		this.name = driverName;
		this.lapData = lapData;

		this.stints = [];
		this.validStints = [];
		this.validStintTimes = [];
		this.fastestStint = undefined;
	}
}
