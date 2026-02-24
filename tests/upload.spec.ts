import {test, expect} from '@playwright/test';
import CartPage from '../pages/cart.page';
import path from 'path';

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['2mb.pdf', 'edit.png'];

    for (const name of fileName) {
        test(`Should upload a ${name} file`, async ({ page }) => {
        cartPage = new CartPage(page);

        // Open URL
        await page.goto('https://practice.sdetunicorns.com/cart');
        
        // Provide File Path
        const filePath = path.join(__dirname, `../data/${name}`);

        //DOM Manipulation to make the hidden input visible
        // await page.evaluate(() => {
        //     const selector = document.querySelector('#upfile_1');
        //     if (selector) {
        //         selector.className = '';
        //     }
        // });

        // Upload File
        //await page.setInputFiles('#upfile_1', filePath);
        cartPage.uploadComponent().uploadFile(filePath);

        // Click Submit Button
        //await page.locator('#upload_1').click();

        // Wait for Condition
        // await page.locator('#wfu_messageblock_header_1_label_1')
        // .waitFor({ state: 'visible', timeout: 10000 });

        // Verify File Uploaded
        //await expect(page.locator('#wfu_messageblock_header_1_label_1'))

        await expect(cartPage.uploadComponent().successMessage)
        .toContainText('uploaded successfully', {timeout: 10000});
        });
    }
});