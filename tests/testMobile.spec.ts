import {test, expect} from "@playwright/test"

test('Mobile Test', async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.locator('.sidebar-toggle').click()
    await page.getByText('Form Layouts').click()
    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
    await usingTheGridEmailInput.fill('test@test.com')
    await usingTheGridEmailInput.clear()
    await usingTheGridEmailInput.pressSequentially('test2@test.com') 

})
