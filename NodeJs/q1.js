import fs from 'fs/promises';
import xmlparser from 'xml-parser';

function XmlParserHelper(options) {
    this._options = options;
}

XmlParserHelper.prototype.parseFile = async function() {
    const filePath = this._options;

    if(!filePath) {
        throw new Error("No filepath provided!");
    }

    try {
        const xml = await fs.readFile(filePath, 'utf-8');
        return xmlparser(xml);
    } catch(err) {
         if (err.code === 'ENOENT') {
            throw new Error(`File not found: ${filePath}`);
        }
    throw new Error(`Failed to read file: ${err.message}`);
  }
};

export default XmlParserHelper;