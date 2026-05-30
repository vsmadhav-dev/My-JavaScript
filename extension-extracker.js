function extensionExtract(extension){
    let pointToExtract = extension.indexOf(".");
    let extracted = extension.slice(pointToExtract);
    return extracted;
}
console.log(extensionExtract("history.jpg"));