import { test } from "../fixtures/login-fixture";

test("Fixture test", async ({ homePage }) => {
  await homePage.expectServiceTitleToBeVisible();
});