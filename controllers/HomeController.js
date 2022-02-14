const File = require('../models/file');

exports.getallFiles = async (req,res) => {
    try{

        const files = await File.find({});

        res.status(200).json({ status: "success", data: { files }});
    }
    catch(err) {
        res.status(500).json({ msg: err.message });
        console.log(err);
    }
}

exports.calculate = async (req,res) => {
    try{

        const file = req.body;
        console.log(file);

        const data = await File.findById(file.file._id);
        console.log(data);


        let id = file.file.id;
        let trade_type = file.file.trade_type;
        let quantity = file.file.quantity;
        let price = file.file.price;
        let average = file.file.average;

        for(let i=0;i<data.id.length;i++){
            quantity[i] = parseInt(quantity[i]);
        }

        
        let sum=0;
        let count=0;
        let avg = 0;

        for(let i=0; i<data.id.length ; i++ ){

            if(trade_type[i] == "BUY" ){
                // count = count + parseInt(quantity[i])  ;
                count = count + quantity[i]  ;
                sum = sum + quantity[i] * price[i];
                avg = sum/count;
            }
            else{
                let decrease = quantity[i];
                count = count - decrease;

                for(let j=0;decrease>0;j++){
                    if(decrease==0){
                        break;
                    }
                    else if(quantity[j] == 0){
                        continue;
                    }
                    else if(decrease >= quantity[j] ){

                        sum = sum - quantity[j] * price[j];

                        decrease = decrease - quantity[j];
                        quantity[j] = 0;
                        // console.log(`Quantity of ${j} is ${quantity[j]} `);
                        // console.log(decrease);

                    }
                    else if(decrease<quantity[j]) {
                        sum = sum - decrease * price[i] ;
                        quantity[i] = quantity[i] - decrease;
                        decrease = 0;
                        // console.log(`Quantity of ${i} is ${quantity[i]} `);
                        break;
                    }

                    

                }

                avg=sum/count;

            }
            

            data.average[i] = avg;

        }



        res.status(200).json({ status: "success", data: { data }});
        

    }
    catch(err){
        res.status(500).json({ msg: err.message });
        console.log(err);
    }
}