const fs = require('fs');
const config = require("./config.json");

router.get("/getData",(req, res)=>{
    fs.readFile("../Data.json", "utf8", (err, jsonString) => {
        if (err) {
            res.send("File read failed:", err);
          return;
        }
        try{
            const product=JSON.parse(jsonString);
            res.send("Product Name :", product.name);
            res.send("Product Price :", product.price);
        }catch(err){
            res.send("Json Parsing Error :", err);
        }
    });
});

module.exports=router;

