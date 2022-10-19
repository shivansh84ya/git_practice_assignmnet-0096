let n =12;
let factors = 0
for(i=0;i<=n;i++){
  if(n%i==0){
    factors++
  }
}
if(factors==2){
  console.log(n,"is a prime number")
}else{
  console.log(n,"is not a prime number")
}
