response object(res)


///
/ 
welcome to server
/about
welcome to about use page
/employee
 id,name, role, salary


 /// Routing 
 Routing is the process of how the application responds the client request through a spectific url or hppt method like /about , /services
 different route mehod 
 Get  read data
 post create data
 put update the entire data
 patch update the partial data
 delete  data delete


 different type os route 

/// assignment  
 // req(Request object)  
 it containd all the information send by the client
 req.body
 req.params route parameters
 req.query query paramters
 req.headers
 req.method
 req.url


// res(Response object)
it is used to send back data to the client
res.send()  send text or html
res.json() send Json
res.status() send http status code 
res.redirect() redirect or navigate to another pGE
res.download() download file




// http status code
an http status code is a 3-digit number retured by he server to tell the slient whether the request succeeded or failed.


status code categories
100 information
200/201  successfully
400 client error
500 server error
1. 200 
the request comleted successfully
res.status(200).json({
    message:"doctors data fetched successfully"
})

uses
i.  get requests
ii. successfully updates


2. 201
it is used to created successfully nrw resources

204 no content
res.status(204).send()

400 bad reques
the client snet invalid or incomplete data.
re.status(400).json({
    message:"name is required
})
// controllers (business logic)


a controllers is a server function that recieves an http request, processes it  and send an http response back to the client


types of the error
1. sytax error
wrong javascript syntax
example 

    output 
    syntax error

2.runtime error 
it occurs while the application is running .

const user={
    name:"Rahul

    3. logical error 
    program runs but gives the wrong result.


    cosnt total= 10-20
    consoel.log(total);

    // mysql -u root -p
    Rahul


    // student table
    id   name  age  course 
    1     Rahul 23   bit
    2     ram  12    4

    here , each horizontal record is called a row
     each vertical field is called a column

     students_course
// create tbales 
     // create table students{
        id int  primary key,
        name varchar(100),
        age int,
        course varchar(244)
     }
     show tables


     //insert first recorn
     insert into students values(1,"Rahul",23,"BIT")



     // ORM
     object relational mapping  is a technique that lets us to interact with a database using our programiing language insstead of writin raw sql queries 

     /// prisma 
     cosnt user = prisma.user.findunique({
        where:{
            1
        }
     })


     // advantages
     --cleaner
     -- auto-compiletion
     -type safe
     -- fewer bugs
     --less sql writing



     step to create prisma 
     step 1 npm install prisma --save-dev
     step 2 npm install @prisma/client
     step 3 npx prisma init

     // schema 
     it is the blueprint of our database.




     sql   prisma
     INT   Int
     VARCHAR  String
     BOOLEAN  Boolean
     FLOAT float
     DATATIME DateTime
