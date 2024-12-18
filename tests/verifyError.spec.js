const {test, expect} = require("@playwright/test")

test("verify error message", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin125")

    await page.locator("//button[@type='submit']").click()
   await page.waitForTimeout(5500)

   await page.getByText("Logout")

   const textmessage = await page.locator("(//p[@class='oxd-text oxd-text--p oxd-alert-content-text'])[1]").textContent()

   expect(textmessage).toContain("Invalid credentials")
})