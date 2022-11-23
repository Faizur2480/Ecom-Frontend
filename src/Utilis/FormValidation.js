export function validateInputLength(value,len,validLen){
    let msg = ""
    if(len > validLen ){
       msg=`${value} should be maximum length of ${validLen}`
    }else{
        msg=""
    }
 return msg
}
