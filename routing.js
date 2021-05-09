const fs = require('fs')
const path = require('path')


const routing =  (req = '/') => {
return new Promise((resolve,reject)=>{
   console.log(req)
   switch(req){
      case '/':
        fs.readFile(
           path.join(__dirname,'filesHTML','start.html'),
           'utf-8',
           (err, content) =>{
              if(err){
                 reject(err)
              }
             resolve(content)
           }
           )
         break;
      case '/about':
         fs.readFile(
            path.join(__dirname,'filesHTML','about.html'),
            'utf-8',
            (err, content) =>{
               if(err){
                  reject(err)
               }
               resolve(content)
            }
            )
         break;
      case '/setting':
         fs.readFile(
            path.join(__dirname,'filesHTML','setting.html'),
            'utf-8',
            (err, content) =>{
               if(err){
                  reject(err)
               }
                 resolve(content)
            }
            )
         break;
      default:
         fs.readFile(
            path.join(__dirname,'filesHTML','404.html'),
            'utf-8',
            (err, content) =>{
               if(err){
                  reject(err)
               }
                 resolve(content)
            }
            )
         break;
      }   
   })
}

module.exports = routing