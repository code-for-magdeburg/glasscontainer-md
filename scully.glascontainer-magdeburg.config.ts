import { ScullyConfig } from '@scullyio/scully';
export const config = {
  projectRoot: "./src",
  projectName: "glascontainer-magdeburg",
  outDir: './dist/static',
  routes: {
  },
  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  }
};