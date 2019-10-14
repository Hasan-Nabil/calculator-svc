import { createServer } from "http";
import { parse } from "url";
import { addService,subService,mulService,divService } from "./calculator.service";

const server = createServer((req, res) => {
    const url = parse(req.url, true);
    switch(url.pathname) {
        case '/a':
            addService(req, res);
            break;
        case '/s':
            subService(req, res);
            break;
        case '/m':
            mulService(req, res);
            break;
        case '/d':
            divService(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end();

    }
});

server.listen(3000, () => console.log('Server running....'));