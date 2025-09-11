import { test, expect } from "@playwright/test";

test.beforeEach( async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator Syntax Rules', async({page}) => {
    //by Tag Name
    page.locator('input')

    //by ID
    page.locator("#inputEmail1")

    //by Class
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by Class Value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //by Xpath //! NOT RECOMMENDED
    page.locator('//*[@id="inputEmail1"]')

    //by partial text match
    page.locator(':text("Using")')

    //by exact match
    page.locator(":text-is('Using the Grid')")
})
