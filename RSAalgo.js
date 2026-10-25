let p  = 11;
let q = 3;
let n = p * q;
let publicKey = 3;
let privateKey = 1;

let limit = (p - 1) * (q - 1);
while ((privateKey * publicKey) % limit !== 1) {
  privateKey++
}
console.log(privateKey)
let message = 4;
let numPower = message ** publicKey;
let encryptedKey = numPower % n;
console.log(encryptedKey);
let decryptionKey = encryptedKey ** privateKey;
decryptionKey = decryptionKey % n;
console.log(decryptionKey);
