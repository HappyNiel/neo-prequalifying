import { suite, test } 	from "mocha-typescript";
import * as Moq			from "typemoq";
import { assert }		from "chai";

import { AppComponent } from "src/app/app.component";

@suite
class AppComontentTest {

	@test public Test() {
		const isTrue = true;
		assert.isTrue(isTrue);
	}
}
