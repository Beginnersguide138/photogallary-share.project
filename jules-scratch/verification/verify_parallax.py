import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('parallax/index.html')

        await page.goto(f'file://{file_path}', wait_until='networkidle')

        # Wait for the #const element to have the correct display style
        const_element = page.locator('#const')
        await expect(const_element).to_have_css('display', 'inline-block')

        await page.screenshot(path='jules-scratch/verification/parallax.png')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
