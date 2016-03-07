# QR-gen 

QR-gen is a simple command line utility that creates QR-encoded PNG images.

## Usage
   
   Since `qr-gen` uses ES6 features that are still not default in node (as of node 5.7.1), 
   It should be run with the following flag:
   
    node --harmony_destructuring path_to_qr.js
    
   I recommend you create an alias `qr-gen` for the above command.
   
- Create an image from a string.

  `qr-gen <stringToEncode> <pathToQRimage>`

- Create an image from a file (pass a `-f` flag at any point)
  
  `qr-gen <filePath> <pathToQRimage> -f`
