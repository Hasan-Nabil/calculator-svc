import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { add,sub,mul,div } from "./calculator";

export function addService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;

    // parameter validation
    if (!query['n1'] || !query['n2']){
        res.statusCode = 400;
        res.end();
        return;
    }
    //n1 dan n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10);
    const n2 = parseInt(query['n2'] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    // addition
    const inadd = add(n1, n2);
    //res.end(inadd.toString());
    const outadd = { result: inadd }
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(outadd))

    res.end();
    
    // console.log(url.query);
    // res.end();
}

export function subService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;

    // parameter validation
    if (!query['n1'] || !query['n2']){
        res.statusCode = 400;
        res.end();
        return;
    }
    //n1 dan n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10);
    const n2 = parseInt(query['n2'] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    // subtraction
    const insub = sub(n1, n2);
    // res.end(insub.toString());
    const outsub = { result: insub }
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(outsub))
    
    res.end();
}

export function mulService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;

    // parameter validation
    if (!query['n1'] || !query['n2']){
        res.statusCode = 400;
        res.end();
        return;
    }
    //n1 dan n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10);
    const n2 = parseInt(query['n2'] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    // multiplication
    const inmul = mul(n1, n2);
    // res.end(inmul.toString());
    const outmul = { result: inmul }
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(outmul))

    res.end();
}

export function divService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;

    // parameter validation
    if (!query['n1'] || !query['n2']){
        res.statusCode = 400;
        res.end();
        return;
    }
    //n1 dan n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10);
    const n2 = parseInt(query['n2'] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    // division
    const indiv = div(n1, n2);
    // res.end(indiv.toString());
    const outdiv = { result: indiv }
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(outdiv))
    
    res.end();
}
