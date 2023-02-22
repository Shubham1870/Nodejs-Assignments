const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	try{
		fs.writeFile(fileName,fileContent)
		console.log(`the file is print ${fileName}`)
	}
	catch(e){
		console.log(e.message)
	}
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	try{
		const data= await fs.readFile(fileName,{encoding:"utf-8"})
		console.log(data)
	}
	catch(e){
		console.log(e.message)
	}
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	try{
		await fs.appendFile(fileName,fileContent)
		console.log("file is updated")
	}
	catch(e){
		console.log(e.message)
	}
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		await fs.unlink(fileName)
		console.log("file deletd")
	}
	catch(e){
		console.log(e.message)
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }