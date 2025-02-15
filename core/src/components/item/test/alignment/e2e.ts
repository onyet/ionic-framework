import { newE2EPage } from '@stencil/core/testing';

test('item: alignment', async () => {
  const page = await newE2EPage({
    url: '/src/components/item/test/alignment?ionic:_testing=true',
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});

test('item: alignment-rtl', async () => {
  const page = await newE2EPage({
    url: '/src/components/item/test/alignment?ionic:_testing=true&rtl=true',
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
