const {test, expect } = require('@playwright/test');


// test("verify application title", async function({page}) {
//     await page.goto("https://google.com")
//     const url = await page.url()
//    //Console.log(url)

//     const title = await page.title();
//     expect(title).toContain("Google")
//    //await  expect(page).toHaveTitle("Google")
//  })