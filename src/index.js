const pocketApiResponse = require('./pocket-response-demo.json');

let result = 'URL,Title,Selection,Folder';
let items = pocketApiResponse.list;
for (var itemId in items) {
    if (items.hasOwnProperty(itemId)) {
        const item = items[itemId];
        const tag = item.hasOwnProperty('tags') ? Object.keys(item.tags)[0].replace('&amp;','').replace('/','') : 'Home';
        result += `
"${item.given_url}","${item.given_title.replace('&amp;','&')}","","${tag.charAt(0).toUpperCase() + tag.substr(1)}"`;
    }
}

console.log(result);