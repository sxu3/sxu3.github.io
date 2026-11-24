export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  // Only real legacy publications are published; theme demos stay out of dist.
  for (const slug of ['emnlp2023_vechr', 'emnlp2023_rave', 'emnlp2022_echr', 'emnlp2022_summarization', 'nllp2022', 'lrec2022']) {
    eleventyConfig.addPassthroughCopy({ [`publication/${slug}`]: `publication/${slug}` });
  }
  for (const assets of ['css', 'js', 'webfonts', 'media', 'authors', 'uploads']) {
    eleventyConfig.addPassthroughCopy({ [assets]: assets });
  }
  eleventyConfig.ignores.add('src/content/**');
  return { dir: { input: 'src', output: 'dist', includes: '_includes', data: '_data' }, markdownTemplateEngine: 'njk', htmlTemplateEngine: 'njk' };
}
