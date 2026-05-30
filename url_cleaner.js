function urlCleaner(url){
    let cleaner = url.indexOf("/") + 2;
    let cleanedUrl = url.slice(cleaner);
    return cleanedUrl;
}
console.log(urlCleaner("https://youtube.com"));