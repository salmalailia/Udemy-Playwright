    import {test, expect} from '@playwright/test';
    import BlogPage from '../pages/blog.page';

    test.describe('Blog', () => {
        let blogPage: BlogPage;   

    test('Verify Recents Posts Count and Verify the Lenght of each List Item', async ({ page }) => {
        blogPage = new BlogPage(page);

        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/blog');
        await blogPage.navigate();

        // Get the Recents Posts List Items
        //const recentPostList = page.locator('#recent-posts-3 ul li');
 
        // Loop through each List Item and Assert the char length is greater than 10
        for (const el of await blogPage.recentPostList.elementHandles()) {
            expect((await el.textContent())!.trim().length).toBeGreaterThan(10);
        }

        // Verify the Navlink Text is Visible
        expect(await blogPage.recentPostList.count()).toEqual(5);
        
        });
    });