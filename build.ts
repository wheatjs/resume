import { writeFile } from 'node:fs/promises'
import { preview } from 'vite'
import Puppeteer from 'puppeteer'
import config from './vite.config'

async function createPDF() {
  const server = await preview({
    ...config,
    preview: {
      port: 8080,
    },
  })

  const browser = await Puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' })

  const pdf = await page.pdf({
    width: '900px',
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: '0.2in',
      bottom: '0.2in',
      left: '0.2in',
      right: '0.2in',
    },
  })

  await browser.close()
  await writeFile('./dist/index.pdf', pdf)
  await server.httpServer.close()
  return pdf
}

createPDF()
