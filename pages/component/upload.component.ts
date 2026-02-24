import { Locator, Page } from '@playwright/test';

class UploadComponent {
    private page: Page;
    uploadInput: string;
    submitButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = '#upfile_1';
        this.submitButton = page.locator('#upload_1');
        this.successMessage = page.locator('#wfu_messageblock_header_1_label_1');
    }

    async uploadFile(filePath: string) {
        // Upload File
        await this.page.setInputFiles(this.uploadInput, filePath);

        // Click Submit Button
        await this.submitButton.click();
    }
}
export default UploadComponent;