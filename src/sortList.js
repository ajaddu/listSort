function sortList(inputList){
    let list = inputList;
    let len = inputList.length;
    let minimum;
    console.log(`Input List - ${list}`);

    for(i=0;i<len;i++){
        for(j=i+1;j<len;j++){
            if(list[i] > list[j]){
                // swap values if prev > next
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
               //console.log(`swipe #${i}-${j} - ${list}`);
            }
        }
    }
   
    return list;
}

module.exports = sortList;