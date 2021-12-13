const fs = require('fs');
const config = require("./config.json");

router.get("/Calculate",(req, res)=>{
    fs.readFile("../Data.json", "utf8", (err, jsonString) => {
        if (err) {
            res.Status("File read failed:", err);
            return;
        }
        try{
            const product=JSON.parse(jsonString);
            if(req.body.name==="SHOWER_GEL"){
                res.Status("Product Name :", req.body.name);
                res.Status("Product Qty :", req.body.qty);
                res.Status("Total Price :", product.SGprice*req.body.qty);

            }else if(req.body.name==="DEODRANT"){
                res.Status("Product Name :", req.body.name);
                res.Status("Product Qty :", req.body.qty);
                res.Status("Total Price :", product.price*req.body.qty);
            }
        }catch(err){
            res.Status("Json Parsing Error :", err);
        }
    });
});

module.exports=router;