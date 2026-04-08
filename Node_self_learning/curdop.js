const http = require('http');

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 }
];

const server = http.createServer((req, res) => {


    if (req.url === "/products" && req.method === "GET") {
        res.end(JSON.stringify(products));
    }

  
    else if (req.url.startsWith("/products/") && req.method === "GET") {
        const id = req.url.split("/")[2];

        let product = products.find(p => p.id == id);

        if (product) {
            res.end(JSON.stringify(product));
        } else {
            res.end("Product not found");
        }
    }


    else if (req.url === "/products" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body);

            const newProduct = {
                id: products.length + 1,
                name: data.name,
                price: data.price
            };

            products.push(newProduct);
            res.end("Product added");
        });
    }

   
    else if (req.url.startsWith("/products/") && req.method === "PUT") {
        const id = req.url.split("/")[2];
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body);

            let product = products.find(p => p.id == id);

            if (product) {
                product.name = data.name || product.name;
                product.price = data.price || product.price;
                res.end("Product updated");
            } else {
                res.end("Product not found");
            }
        });
    }

    
    else if (req.url.startsWith("/products/") && req.method === "DELETE") {
        const id = req.url.split("/")[2];

        products = products.filter(p => p.id != id);

        res.end("Product deleted");
    }

    else {
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});