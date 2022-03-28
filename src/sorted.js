function sorted(inputList){
    let list = inputList;
    let len = inputList.length;

    for(i=0; i<len; i++){
        for(j=1; j<len; j++){
            if(list[i] > list[j]){
                console.log(list[i]);
                console.log(list[j]);
                // swap them
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                break;
            }
        }

    }

    console.log(list);
   
    return list;
}

module.exports = sorted;