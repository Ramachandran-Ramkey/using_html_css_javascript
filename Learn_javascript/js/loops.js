// loops
/* //while loop

let i = 0;
while(i<=50)
{
    console.log(i);
    i = i + 1;
} */


/* //    do while

let i = 50;
do
{
    console.log(i);
    i = i + 1;
}   while(i<=50) */

//for while loop

/* for(i=0;i<=50;i++)
{
    console.log(i);
} */
/* let name="Dhuddu";
for(let i=0;i<= name.length;i+=1)
 {
     console.log(name.charAt(i));
 }   */

//nested loop
/* let name="Dh";
for(let i=0;i<= name.length;i+=1)
 {
    for(let j=0;j<= name.length;j++)
    {
     console.log(i,j);
    }  
}
 */

//continue 
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    /* break; */
    continue;
  }
  text = text + i;
}

console.log(text);