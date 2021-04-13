var fungsi = function CreateSuspectsObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            log('my name is $name');
        }
    }
    
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']

_.each(suspects, fungsi)