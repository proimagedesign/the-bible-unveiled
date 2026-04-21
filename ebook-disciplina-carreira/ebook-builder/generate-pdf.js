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
    path: path.join(__dirname, '../../public/A-Disciplina-na-Carreira-Crista.pdf'),
    format: 'A5',
    preferCSSPageSize: true, /* ISSO FAZ O PUPPETEER OBEDECER O @page margin do CSS */
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="font-size: 10px; text-align: center; width: 100%; font-family: 'Open Sans', sans-serif; color: #666;">
        <span class="pageNumber"></span>
      </div>`,
    /* O margin do puppeteer foi removido para evitar conflito com o @page */
  });

  await browser.close();
  console.log('PDF gerado com sucesso!');
})();
