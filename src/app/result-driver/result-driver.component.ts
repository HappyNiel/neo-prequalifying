import { Component, OnInit, Input } from "@angular/core";
import { DriverInfo } from "../classes/driver-data.model";

@Component({
	selector: "app-result-driver",
	templateUrl: "./result-driver.component.html",
	styleUrls: ["./result-driver.component.scss"]
})
export class ResultDriverComponent implements OnInit {
	@Input() driverInfoData: DriverInfo;
	driverId: number;
	driverName: string;
	lapData: any[];
	fastestStint: string;

	constructor() {
	}

	ngOnInit() {
		this.driverId = this.driverInfoData.id;
		this.driverName = this.driverInfoData.name;
		this.lapData = this.driverInfoData.lapData;

		this.fetchStintsFromLapDataAndRemoveInvalidStints(this.lapData);
        console.log(`${this.driverName}(${this.driverId}):`);
        console.log(this.lapData);
	}

	fetchStintsFromLapDataAndRemoveInvalidStints(lapData: any[]): void {
		const totalLaps = lapData;
		let lapTime = 0;

		// Create stints of ten laps for each lap.
		for (let i = 0; i < totalLaps.length; i++) {

			// Create laptime from ses_time property
			if (i === 0) {
				totalLaps[i]["lap_time"] = lapTime;
			}
			else {

				totalLaps[i]["lap_time"] = lapData[i].ses_time - lapTime;
			}

			lapTime = lapData[i].ses_time;

			const lapNumber = totalLaps[i].lap_num;
			this.createStints(totalLaps, lapNumber);
		}

		this.removeInvalidStints();
		this.calculateLapTimesOfStints();
	}

	createStints(totalLaps: any[], lapNumber: number): void {

		const indexOfLap = totalLaps.findIndex(lap => lap.lap_num === lapNumber);
		const sliced = totalLaps.slice(indexOfLap, indexOfLap + 10);

		// Only return the stints that have 10 laps.
		if (sliced.length === 10) {

			this.driverInfoData.stints.push(sliced);
			this.driverInfoData.validStints.push(sliced);
		}
	}

	removeInvalidStints(): void {
		const allDriverStints = this.driverInfoData.validStints;
		const indexInvalidStints = [];

		// Loop through all stints
		for (let i = 0; i < allDriverStints.length; i++) {

			// Loop through all laps in this stint and mark the stint as valid or not.
			const isStintValid = this.checkStintForInvalidLaps(allDriverStints[i]);

			// If the stint is invalid, mark it.
			if (!isStintValid) {

				indexInvalidStints.push(i);
			}
		}

		// Remove the laps from
		for (let i = indexInvalidStints.length - 1; i >= 0; i--) {

			allDriverStints.splice(indexInvalidStints[i], 1);
		}
	}

	checkStintForInvalidLaps(stintLaps: any[]) {
		let validStint = true;

		// Go through the laps of a stint
		for (let i = 0; i < stintLaps.length; i++) {

			// Check if the lap has an invalid lap
			if (stintLaps[i].flags !== 0
				&& stintLaps[i].flags !== 256
				&& stintLaps[i].flags !== 16384) {
				validStint = false;
				break;
			}
		}

		return validStint;
	}

	calculateLapTimesOfStints() {
		const validStints = this.driverInfoData.validStints;

		// Go through the valid stints.
		for (let i = 0; i < validStints.length; i++) {
			const stint = validStints[i];
			this.calculateAverageLapTimesOfEachStint(stint);
        }

		this.getFastestStint();
	}

	calculateAverageLapTimesOfEachStint(stint: any[]): void {
		let totalLapTime = 0;

		for (let i = 0; i < stint.length; i++) {
			const lap = stint[i];
			totalLapTime += lap.lap_time;
		}

		const averageLapTime = totalLapTime / 10;
        this.driverInfoData.validStintTimes.push(averageLapTime);
        
	}

	getFastestStint(): void {
        const stintTimes = this.driverInfoData.validStintTimes;
        const fastestStint = Math.min(...stintTimes);
        
        console.log(stintTimes);
        // console.log(stintTimes.map(x => this.formatLapTime(x)));

		this.driverInfoData.fastestStint = fastestStint;
		this.driverInfoData.parsedFastestStint = this.formatLapTime(fastestStint);

        this.fastestStint = this.formatLapTime(fastestStint);
        console.log(this.fastestStint);
    }

	formatLapTime(lapTime: number): string {
		// return "";
		const full = lapTime / 10000;
		const secsFull = parseInt(full);
		let leftOver = full - secsFull;
		leftOver = parseInt(leftOver * 10000);

		if (leftOver < 1000) {

			leftOver = "0" + leftOver;
		}
		else if (leftOver < 100) {

			leftOver = "00" + leftOver;
		}
		else if (leftOver < 10) {

			leftOver = "000" + leftOver;
		}

		let mins = parseInt(secsFull / 60);
		let secs = secsFull;

		if (secs < 10) {

			secs = "0" + secs;
		}
		// if (mins > 0) {

		// 	return mins + ":" + secs + "." + leftOver;
		// }

		return secs + "." + leftOver;
	}
}
