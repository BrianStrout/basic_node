// const http = require('http');
// const fs = require('fs');
// const path = require('path');



// const server = http.createServer((req, res) =>{

//     //check for index
//     let filePath = path.join(
//             __dirname,
//             'pubic',
//             req.url === '/' ? 'index.html' : req.url
//     );

//     //get extension of incoming non-index file

//     let extname = path.extname(filePath);

//     //then set content type

//     let contentType = 'text/html'

//         switch(extname){
//             case '.js':
//                 contentType = 'text/javascript';
//                 break;
//             case '.css':
//                 contentType = 'text/css';
//                     break;                
//             case '.json':
//                 contentType = 'application/json';
//                         break;
//             case '.png':
//                 contentType = 'image/png';
//                             break;
//             case '.jpg':
//                 contentType = 'image/jpg';
//                                 break;
//         }
//         fs.readFile(filePath, (err, content)=>{

//             if(err){
//                 //path not found
//                 if(err.code === 'ENOENT'){
//                     fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
//                         res.writeHead(200, {'Content-Type': 'text/html'})
//                         res.end(content, 'utf8');
//                     } )
//                 }else{
//                     res.writeHead(500);
//                     res.end(`Serve Error: ${err.code}`);
//                 }
//                 //successful load
//             }else{
//                 res.writeHead(200, {'Content-Type': contentType})
//                 res.end(content, 'utf8');
//             }
//         })
// })
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, ()=>console.log('server running on ' + PORT));




const http = require('http');
const path = require('path');
const fs = require('fs');


console.log("func")

const server = http.createServer((req,res) =>{

    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end('<h1>Home!!?!</h1>')
    //     })
    // }
    // if (req.url === '/api/users'){
    //    const users = [
    //     {name: 'bob', age: 40},
    //     {name: 'bobby', age: 20} 
    //    ];
    //    res.writeHead(200, {'Content-Type': 'application/json'});
    //    res.end(JSON.stringify(users));
    // }


    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end('<h1>Home!!?!</h1>')
    //     })
    // }





//build file path
  
let filePath = path.join(
        __dirname,
         'public',
          req.url === "/" ? './index.html' : req.url
          );
    
    //get ext of file
        let extname = path.extname(filePath);

        //and set initial content type
let contentType = 'text/html'

        switch(extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                    break;                
            case '.json':
                contentType = 'application/json';
                        break;
            case '.png':
                contentType = 'image/png';
                            break;
            case '.jpg':
                contentType = 'image/jpg';
                                break;
        }

fs.readFile(filePath, (err, content)=>{
    if (err){
        if (err.code === 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8');
                })
        }else{
                    res.writeHead(500);
                    res.end(`Serve Error: ${err.code}`);
        }


        //successful load...
        }else{
        res.writeHead(200, {'Content-Type': contentType})
        res.end(content, 'utf8');

        
    }
})
});


const PORT = process.env.PORT || 5000;



server.listen(PORT, ()=>console.log('server running on ' + PORT));