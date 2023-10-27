let keys=[];
let display_text=document.getElementById("display_");
let first=0;
function click_(no){
          if(first==0)
          {display_text.innerHTML=no;first++;}
          else
          display_text.innerHTML+=no;
}
function operation(){
          let value=display_text.innerHTML;
          let value_arr=value.split("");
          let number=0;
          let is_dot_encounted=false;
          let int_value_arr=[];
          // concate number and also change string to number
          for (let i=0;i<value_arr.length;i++){
                    if(Number(value_arr[i])>=0)
                    number=(number*10)+Number(value_arr[i]);
                    
          else {
                    int_value_arr.push(number)
                    int_value_arr.push(value_arr[i]);
                    number=0;
                    }
          }
          
          int_value_arr.push(number);
         
          let final_arr=[];
          // find float data  and also adding it into new array
          for(let i=0;i<int_value_arr.length;i++){
                    if(int_value_arr[i]=='.'){
                             is_dot_encounted=true;
                    }else if(is_dot_encounted){
                              final_arr[i-2]=Number(int_value_arr[i-2]+"."+int_value_arr[i]);
                              is_dot_encounted=false;
                    }
                    else{
                              final_arr[i]=int_value_arr[i];
                    }
                         
          }
          
         
          // find and remove unwanted data 
         final_arr= final_arr.filter((e)=>{if(e!=undefined) return e; });
//          console.log(final_arr);

          if(number!=0){
         let output=0;
          for( let i=0;i<final_arr.length;i++){
                    switch (final_arr[i]){
                              case '+':
                                        if(output==0){
                                                  output=final_arr[i-1]+final_arr[i+1];
                                        }else{
                                                  output+=final_arr[i+1];
                                        }
                                        break;
                              case '*':
                                        if(output==0){
                                                  output=final_arr[i-1]*final_arr[i+1];
                                        }else{
                                                  output*=final_arr[i+1];
                                        }
                                        break;  
                              case '/':
                                        if(output==0){
                                                  output=final_arr[i-1]/final_arr[i+1];
                                        }else{
                                                  output/=final_arr[i+1];
                                        }
                                        break;
                              case '%':
                                        if(output==0){
                                                  output=final_arr[i-1]%final_arr[i+1];
                                        }else{
                                                  output%=final_arr[i+1];
                                        }
                                        break;   
                              case '-':
                                        if(output==0){
                                                  output=final_arr[i-1]-final_arr[i+1];
                                        }else{
                                                  output-=final_arr[i+1];
                                        }
                                        break;  

                             
                                 
                    }
          }
          display_text.innerHTML=output;
}
         
}
function clear_input(){
          display_text.innerHTML="0";
}