


var abc = function(name)
{
    return console.log(name + ' can u pls explain what can u develop?');
}
function interveiwQuestion(job)
{
    if(job === 'designer')
    {
        return function(name)
        {
            console.log(name + 'can u pls explain what UX design is?');
        }
    }
    else if(job === 'teacher')
    {
        return abc;
        
    }
    else if(job === 'analyst')
    {
        return function(name)
        {
            console.log(name + 'can u pls explain what can u analyse?');
        }
    }
    else if(job === 'developer')
    {
        return function(name)
        {
            console.log(name + ' can u pls tell what all exp do u have?');
        }
    }
}

var teacherques=abc;
teacherques('Mike');