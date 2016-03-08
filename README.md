# QR-gen 

QR-gen is a simple command line utility that uses [qr-image](https://github.com/alexeyten/qr-image) to creates QR-encoded PNG images.


## Usage
   
   Since `qr-gen` uses ES6 features that are still not default in node (as of node 5.7.1), 
   It should be run with the following flag:
   
    node --harmony_destructuring path_to_qr.js
    
   I recommend you create an alias `qr-gen` for the above command.
   
- Create an image from a string.

  `qr-gen <stringToEncode> <pathToQRimage>`

- Create an image from a file (pass a `-f` flag at any point)
  
  `qr-gen <filePath> <pathToQRimage> -f`

## Example

Using the [test.txt](https://raw.githubusercontent.com/nem035/QR-Gen/master/test.txt) file from this repo:

    qr-gen -f test.txt text.png
    
Produces:

 ![Sample QR Image](https://raw.githubusercontent.com/nem035/QR-Gen/master/test.png)
