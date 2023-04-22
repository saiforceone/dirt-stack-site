import { $ } from 'execa';

async function runScripts() {
  // run vite build
  await $`npm run vite-build`;
  // run tailwind
  await $`npm run tailwind`;
  // collect static
  await $`python manage.py collectstatic --no-input`;
}

runScripts().then();
