const Parser = require('rss-parser');
async function test() {
    const parser = new Parser();
    const feed = await parser.parseURL('https://cointelegraph.com/rss');
    console.log(feed.items[0]);
}
test();
