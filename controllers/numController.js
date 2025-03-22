const {updateWindow}=require('../utils/numUtil');
const {fetchNumbers}=require('../utils/fetchNumbers');

const windowSize=10;
let windowNumbers=[];

const getNumbers=async(req,res)=>{
    const {numberId}=req.params;
    try{
        const newNumbers=await fetchNumbers(numberId);
        if(!newNumbers){
            return res.status(400).send('Invalid numberId');
        }
        const prevWindowState=[...windowNumbers];
        windowNumbers=updateWindow(windowNumbers,newNumbers,windowSize);
        const avg= windowNumbers.length>0 ? windowNumbers.reduce((acc,num)=>acc+num,0)/windowNumbers.length : 0;

        res.status(200).json({
            numbers:newNumbers,
            windowPrevState:prevWindowState,
            windowCurrentState:windowNumbers,
            avg:parseFloat(avg.toFixed(2))
        });
    }catch(error){
        res.status(500).send('Error fetching number');
    }

};

module.exports={getNumbers};