import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';
import homePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    // Home Page Test
    test('Home Page and Verify', async ({ page }) => {
    //homePage = new HomePage(page);
        
        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();

        // Verify Title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns'); 
    });

    // About Page Test
    test('About Page and Verify', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        
        // Verify Title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site'); 
    });

    // Click Get Started Button using CSS Selector
    test('Click Get Started Button using CSS', async ({ page }) => {
        //homePage = new HomePage(page);

        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();

        // Click Get Started Button
        //await page.locator('#get-started').click();
        await homePage.getStartedButton.click();

        // Verify URL
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started'); 
    });

    // Verify Heading Text using Text Selector
    test('Verify Heading Text using Text Selector', async ({ page }) => {
        //homePage = new HomePage(page);
        
        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();
        
        // Find Text locator
        //const HeadingText = await page.locator('text=Think different. Make different.');
        const HeadingText = await homePage.headingText;

        // Verify URL
        await expect(HeadingText).toBeVisible();
    });

    // Verify Home Link using Text and CSS Selector
    test('Verify Home Link using Text and CSS Selector', async ({ page }) => {
        //homePage = new HomePage(page);
        
        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();

        // Find Home Text locator
        //const HomeText = await page.locator('#zak-primary-menu >> text=Home');
        //const HomeText = await page.locator('#zak-primary-menu:has-text("Home")');
        const HomeText = await homePage.homeLink;

        // Verify Home Text is Enabled
        await expect(HomeText).toBeEnabled();
    });
});

    // Verify Search using XPath Selector
    test('Verify Search using XPath Selector', async ({ page }) => {
        //homePage = new HomePage(page);
       
        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();

        // Find Search Xpath locator
        //const SearchIcon = await page.locator(`//div[contains(@class,"zak-header-actions zak-header-actions--desktop")]//a[contains(@class,"zak-header-search__toggle")]`)
        const SearchIcon = homePage.searchIcon;

        // Verify Home Text is Visible
        await expect(SearchIcon).toBeVisible();
    });

    // Verify Multiple Elements
    test('Verify Multiple Elements', async ({ page }) => {
        //homePage = new HomePage(page);
        
        // Navlink Text
        const navlinkText = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];

        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        //await homePage.navigate();

        // Find the Navlink
        //const MultipleElements = await page.locator('#zak-primary-menu li[id^=menu]');
        //const navlink = await homePage.navLinks;

        // Print out All the Links text contents
        //for (const el of await HTMLTitleElement.all()) {
        //    console.log(await el.textContent());
        //}

        // Verify the Navlink Text is Visible
        expect(await homePage.getNavLinkTexts()).toEqual(navlinkText);
    });