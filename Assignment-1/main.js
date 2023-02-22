const {
  myFileWriter,
  myFileUpdater,
  myFileReader,
  myFileDeleter,
} = require("./index.js");

myFileWriter("test.txt", "Hello");

myFileUpdater("test.txt"," GOOD");

myFileReader("test.txt");

myFileDeleter("test.txt");
