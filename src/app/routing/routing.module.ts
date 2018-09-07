import { Routes, RouterModule } from "@angular/router";
import { SessionsComponent } from "../sessions/sessions.component";
import { ResultsComponent } from "../results/results.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
	{
		path: "",
		redirectTo: "/session",
		pathMatch: "full"
	},
	{
		path: "session",
		// component: SessionsComponent,
		children: [{
			path: ":id",
			component: ResultsComponent
		}]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
