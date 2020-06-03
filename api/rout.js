
const express =require("express");
const router = express.Router();


router.get('/:num',(req,res,next)=>{
    const n = req.params.num;

    if(isNaN(n))console.log("dasdad");
    else console.log("asdads");


    res.status(200).json({
        appp:'sdsdsdsd'
    });
});


module.exports=router;


