// Error = An object that is created to represent a problem that occurs
//Occrur often with user input or establishing a connection

//try{} = enclose the code which could cause an error
//catch{} = Catch amd handle any thrown errors from try {}
//finally{} = Always executes(Used to close connections, release resources, close files)

try{
    console.lag("Hello I am with error");
}catch(err){
    console.log(err);
}finally{
    console.log("Always executes")
}