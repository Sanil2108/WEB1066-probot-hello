const fetch = require('node-fetch')

fetch("https://pastebin.com/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary1eg7Bo4BlgIryU6m",
    "pragma": "no-cache",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_csrf-frontend=4d68e54bf63896fcb6312fb967b9e15fb71431e681c96f21486c7c460ea645c6a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%22MHxemCgoK5fZ1_k0Lj6JJ8k-f532zjqK%22%3B%7D; _ga=GA1.2.731582848.1627685940; _gid=GA1.2.23047085.1627685940; _gat_gtag_UA_58643_34=1"
  },
  "referrer": "https://pastebin.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"_csrf-frontend\"\r\n\r\nnf2bmMrZDzHPZ-_s9eWn4wh-luEsFWM40cGhc70M8_jQteP9p5poXoRSibbEuszTRBSgq2YtCBW39JJBx2aCsw==\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[text]\"\r\n\r\nWe were successful!!\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[format]\"\r\n\r\n1\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[expiration]\"\r\n\r\nN\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[status]\"\r\n\r\n0\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[is_password_enabled]\"\r\n\r\n0\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[is_burn]\"\r\n\r\n0\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m\r\nContent-Disposition: form-data; name=\"PostForm[name]\"\r\n\r\n\r\n------WebKitFormBoundary1eg7Bo4BlgIryU6m--\r\n",
  "method": "POST",
  "mode": "cors"
}).then((res) => {
  console.log('Check out your response on - ', res.url)
});