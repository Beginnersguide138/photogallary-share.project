import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('slides-fa18/html/index.html')

        await page.goto(f'file://{file_path}', wait_until='networkidle')

        # Wait for the alert to appear and accept it
        page.on('dialog', lambda dialog: dialog.accept())

        # Add a small delay to ensure all scripts have run
        await page.wait_for_timeout(1000)

        await page.screenshot(path='jules-scratch/verification/slides_fa18.png')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
