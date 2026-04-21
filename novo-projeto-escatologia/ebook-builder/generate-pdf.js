import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Caminho absoluto para o arquivo HTML
  const htmlPath = `file://${path.join(__dirname, 'ebook.html')}`;
  
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });
  
  // Gera o PDF
  await page.pdf({
    path: path.join(__dirname, '../public/escatologia-dispensacionalista-daniel-filho.pdf'),
    format: 'A5',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="font-size: 10px; text-align: center; width: 100%; font-family: 'Open Sans', sans-serif; color: #666;">
        <span class="pageNumber"></span>
      </div>`,
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm'
    }
  });

  await browser.close();
  console.log('PDF gerado com sucesso!');
})();
