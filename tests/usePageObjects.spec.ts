import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage"
import { FormLayoutsPage } from "../page-objects/formLayoutsPage"
import { DatepickerPage } from "../page-objects/datepickerPage"

import { PageManager } from "../page-objects/pageManager"

test.beforeEach(async({page}) => {
    await page.goto("http://localhost:4200")
})

test('navigate to form page', async ({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})


test('paramterizied methods', async({page})=> {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridForm('test@test.com', 'Welcome1', 'Option 2')
    await pm.onFormLayoutsPage().submitInlineForm('John Smith', 'John@test.com', false)
    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePicker(5)
    await pm.onDatepickerPage().selectDatepickerWithRange(6, 15)
})

