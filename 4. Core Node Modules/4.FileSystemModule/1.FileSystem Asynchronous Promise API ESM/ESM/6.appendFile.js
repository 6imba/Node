import fsp from 'fs/promises'

const data = await fsp.appendFile('./test/myFile1.txt', 'Append text.')
console.log(data)

