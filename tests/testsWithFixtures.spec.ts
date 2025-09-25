import { test } from "../test-options";
import { NavigationPage } from "../page-objects/navigationPage"
import { FormLayoutsPage } from "../page-objects/formLayoutsPage"
import { DatepickerPage } from "../page-objects/datepickerPage"
import { PageManager } from "../page-objects/pageManager";


test('paramterizied methods', async({page, formLayoutsPage})=> {
    const pm = new PageManager(page)
    await pm.onFormLayoutsPage().submitUsingTheGridForm('test@test.com', 'Welcome1', 'Option 2')
    await pm.onFormLayoutsPage().submitInlineForm('John Smith', 'John@test.com', false)
    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePicker(5)
    await pm.onDatepickerPage().selectDatepickerWithRange(6, 15)
})

