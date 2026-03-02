import { Page, Locator } from '@playwright/test';

class HomePage {
    static navLinks(navLinks: any) {
        throw new Error('Method not implemented.');
    }
    static getNavLinkTexts(): any {
        throw new Error('Method not implemented.');
    }
    page: Page;
    getStartedButton: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    static searchIcon: any;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        //this.searchIcon = page.locator(`//div[contains(@class,"zak-header-actions zak-header-actions--desktop")]//a[contains(@class,"zak-header-search__toggle")]`);
        this.searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]')
        this.navLinks = page.locator('#zak-primary-menu li[id^=menu]');
    }

    async navigate() {
        await this.page.goto('/');
    }

    getNavLinkTexts() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;