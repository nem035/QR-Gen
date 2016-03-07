# QR-gen 

QR-gen is a simple command line utility that creates QR-encoded PNG images.

## Instalation

    npm install -g nem035/QR-Gen

## Usage
   
   Since `qr-gen` uses ES6 features that are still not default in node (as of node 5.7.1), 
   I recommend you add an alias to run `qr-gen`:
   
   alias "node --harmony_destructuring path_to_qr.js"
   
- Create an image from a string.

  `qr <stringToEncode> <pathToQRimage>`

- Create an image from a file (pass a `-f` flag at any point)
  
  `qr <filePath> <pathToQRimage> -f`
