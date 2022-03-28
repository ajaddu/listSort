function sorted(inputList){
    let list = inputList;
    let len = inputList.length;

    for(i=0, j=1; i<len; i++, j++){
        if(list[i] > list[j]){
            // swap them
            temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }

    }

    console.log(list);
   
    return list;
}

module.exports = sorted;