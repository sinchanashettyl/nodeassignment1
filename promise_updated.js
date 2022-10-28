const pro1= new Promise((resolve,reject)=>{
  resolve('success');
  reject('reject');
})
pro1.then(
  (val)=>{
    console.log('TRUE : ${err}');
  },
  (err)=>{
    console.log('error: ${err}')
  }
);