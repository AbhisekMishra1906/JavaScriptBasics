class MetadataParser {
    #_verison;
    #_channel;
    #_keyField;

    constructor(version, channel, keyField) {
        this.#_channel = channel;
        this.#_verison = version;
        this.#_keyField = keyField;
    }

    getVersion() {
        return this.#_verison;
    }

    setVersion(version) {
        this.#_verison = version;
    }

    getChannel() {
        return this.#_channel;
    }

    setChannel(channel) {
        this.#_channel = channel;
    }

    getKeyField() {
        return this.#_keyField;
    }

    setKeyField(keyField) {
        this.#_keyField = keyField;
    }

    getKeyFields(jsonArray) {
        if(!Array.isArray(jsonArray)) {
            throw new Error("Input must be an array!");
        }

        return jsonArray.map(obj => obj.channel);
    }
}

const parser = new MetadataParser("1.0", "news", "channel");

console.log(parser.getVersion());
console.log(parser.getChannel());

const data = [
  { channel: "A" },
  { channel: "B" },
  { channel: "C" }
];

console.log(parser.getKeyFields(data));
