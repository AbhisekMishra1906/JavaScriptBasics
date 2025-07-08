import XmlParserHelper from './q1.js';


(async () => {
  const parser = new XmlParserHelper('./sample.xml');

  try {
    const result = await parser.parseFile();
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err.message);
  }
})();