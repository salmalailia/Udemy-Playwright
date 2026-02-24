import {test, expect} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('contact', () => {
    let contactPage: ContactPage;

    // Fill Contact form and Verify
    test('Fill Contact form and Verify', async ({ page }) => {
        contactPage = new ContactPage(page);
        
        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/contact');
        await contactPage.navigate();

        // Fill Input
        //await page.locator('.contact-name input').fill('Salma')
        //await page.locator('.contact-email input').fill('Salma@gmail.com')
        //await page.locator('.contact-phone input').fill('098333213132')
        //await page.locator('.contact-message textarea').fill('Hai')
        //await contactPage.submitForm('Salma', 'Salma@gmail.com', '098333213132', 'Hai')
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph(2));

        // Click Submit
        //await page.locator('button[type=submit]').click()

        // Verify Title
        const succesAlert = page.locator('div[role="alert"]');
        await expect(contactPage.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        
        })
    })