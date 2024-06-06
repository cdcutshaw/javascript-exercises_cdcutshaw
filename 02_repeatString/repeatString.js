let repeatString = function(word, times)
{
    let string = word;
    let i = 1;

    if(times == 0)
        {
            return "";
        }
    
    if(times < 0)
        {
            return "ERROR";
        }

    while(times > i)
        {
            string = string + word;
            i++;
        }

    return string;
}

// Do not edit below this line
module.exports = repeatString;
