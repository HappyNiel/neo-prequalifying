import { BrowserModule } from "@angular/platform-browser";
import { NgModule }	from "@angular/core";
import { AppRoutingModule } from "src/app/routing/routing.module";

import { AppComponent } from "./app.component";
import { SessionsComponent } from "./sessions/sessions.component";
import { ResultsComponent } from "./results/results.component";

import { SessionData } from "./services/session-data.service";
import { CalculateStint } from "./services/calculate-stint.service";

@NgModule({
	declarations: [
		AppComponent,
		SessionsComponent,
		ResultsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		SessionData,
		CalculateStint],
	bootstrap: [AppComponent]
})
export class AppModule { }
