const {test, expect} = require("@playwright/test") 

test("login test", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
   // await page.locator("input(name='passwor')").fill("admin123")

   await page.locator("//button[@type='submit']").click()
   await page.waitForTimeout(5500)

  // await expect(page).toHaveURL("/dashboard/")

   const url = await page.url()
    expect(url).toContain("/dashboard/")

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await page.waitForTimeout(4500)

    const nexturl = await page.url();
    await expect(nexturl).toContain("login")

})