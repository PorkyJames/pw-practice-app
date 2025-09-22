import { Page, Locator } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class NavigationPage extends HelperBase {

    readonly page:Page
    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) {
        super(page)
    }


    async formLayoutsPage () {
        // await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage() {
        // await this.page.getByText('Forms').click()
        // await this.page.waitForTimeout(1000)
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        // await this.page.getByText('Tables & Data').click()
        await this.smartTableMenuItem.click()
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        // await this.page.getByText('Modal & Overlays').click()
        await this.toastrMenuItem.click()
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        // await this.page.getByText('Modal & Overlays').click()
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false") {
            await groupMenuItem.click()
        }
    }


}
