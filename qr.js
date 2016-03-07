'use strict';

const qr = require('qr-image');
const fs = require('fs');

const USAGE_STRING = `
        USAGE:
        -----------------------------------
        Encoding text: 
         \t qr <text> <pathToImage>
        
        Encoding a file:
        \t qr -f <pathToFile> <pathToImage>`;

const [ nodePath, scriptPath, arg1, arg2, arg3 ] = process.argv;

// create a sorted arguments array
const args = [arg1, arg2, arg3].filter(a => !!a);
const isFile = args.indexOf('-f') !== -1;
const stringArgs = args.filter(a => a != '-f');

if (stringArgs.length > 1) {

    const [str, imagePath] = stringArgs; 

    if (isFile) {
        fileAccess(str)
            .then(fileRead)
            .then(content => {
                createImage(content.toString(), imagePath);
                console.log(`Created image ${imagePath} from file ${str}`);
            })
            .catch(logError);
    } else {
        createImage(str, imagePath);
        console.log(`Created image ${imagePath} from text ${str}`);
    }
} else {
    console.log(USAGE_STRING);
}

function createImage(text, path) {
    qr.image(text, {
        type: 'png',
        size: 20
    }).pipe(fs.createWriteStream(path));
}

function fileAccess(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.F_OK | fs.R_OK, (error) => {
            if (!error) {
                resolve(path);
            } else {
                reject(error);
            }
        });
    });
}

function fileRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, content) => {
            if (!error) {
                resolve(content);
            } else {
                reject(error);
            }
        });
    });
}

function logError(error) {
    console.log(error);
}