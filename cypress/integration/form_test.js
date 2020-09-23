describe("Inputs and submit button", () => {
	it("can navigate to the site", () => {
		cy.visit("http://localhost:3000/pizza");
	});

	it("can add text to box", () => {
		cy.get("input[name=name]").type("Christian Bautista");
		cy.get("input[name=instructions]").type("Extra cheese please. Please add chili flakes");
	});

	it("can select size", () => {
		cy.get("select").select("Medium");
	});

	it("select multiple toppings", () => {
		cy.get("input[type=checkbox]").check();
	});

	it("can submit form", () => {
		cy.get("button[name=submit]").click();
	});
});
