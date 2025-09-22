import { Page, expect } from "@playwright/test"

export class DatepickerPage{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async selectCommonDatePicker(numberOfDays: number) {
        const calendarInput = this.page.getByPlaceholder('Form Picker')
        await calendarInput.click()
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDays)
        expect(calendarInput).toHaveValue(dateToAssert)
    }

    async selectDatepickerWithRange(startDate: number, endDate: number) {
        const calendarInput = this.page.getByPlaceholder('Range Picker')
        await calendarInput.click()
        const dateToAssertStart = await this.selectDateInTheCalendar(startDate)
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDate)

        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`

    }

    private async selectDateInTheCalendar(numberOfDays: number) {
        let date = new Date()
        date.setDate(date.getDate() + numberOfDays)
        const expectedDate = date.getDate().toString()
        const expectedMon = date.toLocaleString('En-US', {month: 'short'})
        const expectedMonLong = date.toLocaleString('En-US', {month: 'long'})
        const expectedYr = date.getFullYear()
        const dateToAssert = `${expectedMon} ${expectedDate} ${expectedYr}`

        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonLong} ${expectedYr}`

        while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }

        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
        return dateToAssert
    }
}
