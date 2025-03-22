const updateWindow=(windowsNumbers,newNumbers,windowSize)=>{
    const uniqueNumbers=[...new Set([...windowsNumbers,...newNumbers])];
    if(uniqueNumbers.length>windowSize){
        return uniqueNumbers.slice(uniqueNumbers.length-windowSize);
    }
    return uniqueNumbers;
}

module.exports={updateWindow};