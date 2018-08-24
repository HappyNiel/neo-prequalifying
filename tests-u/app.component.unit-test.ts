import { suite, test } 	from "mocha-typescript";
import * as Moq			from "typemoq";
import { assert }		from "chai";

import { AppComponent } from "src/app/app.component";

@suite
class AppComontentTest {

	// private _testInstanceMock: Moq.IMock<AppComponent>;

	// private get testInstanceMock(): Moq.IMock<AppComponent> {
	// 	return this._testInstanceMock;
	// }

	// private get testInstance(): AppComponent {
	// 	return this.testInstanceMock.object;
	// }

	@test public Test() {
		const isTrue = true;
		assert.isTrue(false);
	}
}
