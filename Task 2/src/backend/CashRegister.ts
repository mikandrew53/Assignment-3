import fs from 'fs';
import path from 'path';

export class CashRegister {

    getCurrentProductInfo(req: any, res: any){
        fs.readFile(path.join(__dirname, 'productDB.json'), (err, fileContent: any) => {
            const UPCCode = req.params.UPCCode;
            let data = JSON.parse(fileContent);
            
            if (req.params.UPCCode === undefined)
                res.send(data);
            else{
                const name: string = data.name[UPCCode];
                const cost: string = data.price[UPCCode];
                
                const nameObj: any = {}
                nameObj[UPCCode] = name;
                
                const priceObj: any = {}
                priceObj[UPCCode] = cost;
                
                const item = { 'name': nameObj, 'price': priceObj }
                res.send(JSON.stringify(item));
            }
        });
    }
}