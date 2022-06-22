function isCalendarHasConfict(s1,e1,s2,e2){
    if(s1<s2){ //if this true meeting-1 starts first
        if(e1>s2) return true; //if meeting two starts before end of meeting one we can detect overlap
    }
    else{
        if(e2>s1) return true //if meeting one starts before end of meeting two we can detect overlap
    }
    
    return false; //No over lap
}

/* I just wrote th Psuedo code . let me know if you want me to write code for comparing given times as wells */