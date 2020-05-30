var height= document.querySelector('.inpHclass')
var weight=document.querySelector('.inpWclass');
var btn=document.querySelector('#btnID');
var list=document.querySelector('.contentlist');
var getWData=localStorage.getItem('MyWeightItem')||'[]';
var getWDataAry=JSON.parse(getWData);
var getHData=localStorage.getItem('MyHeightItem')||'[]';
var getHDataAry=JSON.parse(getHData);
var getBMI=localStorage.getItem('MyBMIItem')||'[]';
var getBMIAry=JSON.parse(getBMI);
var getTimeData=localStorage.getItem('MyTimeItem')||'[]';
var getTimeAry=JSON.parse(getTimeData);
var totallen=getBMIAry.length;
var domli="";

for(var i=totallen-1;i>=0;i--){
    if (parseInt(getBMIAry[i])<18.5){
        color="skybluelist";
        status="過輕";
    }
    else if (parseInt(getBMIAry[i])>=18.5 && parseInt(getBMIAry[i])<25){
        color="greenlist";
        status="理想";
    }
    else if (parseInt(getBMIAry[i])>=25 && parseInt(getBMIAry[i])<30){
        color="brorglist";
        status="過重";
    }
    else if (parseInt(getBMIAry[i])>=30 && parseInt(getBMIAry[i])<35){
        color="orglist";
        status="輕度肥胖"
    }
    else if (parseInt(getBMIAry[i])>=35 && parseInt(getBMIAry[i])<40){
        color="orglist";
        status="中度肥胖";
    }
    else if (parseInt(getBMIAry[i])>=40){
        color="redlist";
        status="重度肥胖";
    }
    domli+='<ul  class="'+color+'"id="colorID"><li class="status">'+status+'</li><li class="bmivalue"><span>BMI</span>'+getBMIAry[i]+'</li><li class="height"><span>height</span>'+getHDataAry[i]+'</li><li class="weight"><span>weight</span>'+getWDataAry[i]+' </li><li>'+getTimeAry[i]+'<li></ul>'
    
    }
list.innerHTML=domli;



function BMIest(){
    if(height.value===''||weight.value===''){
        alert('還沒輸入值');
    }else{
        var bmi=parseInt(weight.value)/(parseInt(height.value)*parseInt(height.value))*10000;
        bmi=bmi.toFixed(2);
        AddtoLocal(bmi);
        ChangeIcon(bmi);
        updateList();

    }
}
//******** 將 height weight bmi的值放入localstorage *********//
function AddtoLocal(bmi){
             //*** heitght *** //
             getHDataAry.push(height.value);
             var MyHeightItem=JSON.stringify(getHDataAry); //轉換成字串
             localStorage.setItem('MyHeightItem',MyHeightItem);
             //***  weight ***//
             getWDataAry.push(weight.value);
             var MyWeightItem=JSON.stringify(getWDataAry); //轉換成字串
             localStorage.setItem('MyWeightItem',MyWeightItem);
             //*** bmi ***//
             getBMIAry.push(bmi);
             var MyBMIItem=JSON.stringify(getBMIAry); //轉換成字串
             localStorage.setItem('MyBMIItem',MyBMIItem); 
             //*** time ***//
             var today = new Date();
             var dd = today.getDate();
             var mm = today.getMonth() + 1; //January is 0
             var yyyy = today.getFullYear();
             var time = dd + '-' + mm + '-' + yyyy;
             getTimeAry.push(time);
             var MyTimeItem=JSON.stringify(getTimeAry);
             localStorage.setItem('MyTimeItem',MyTimeItem);                  
}
//************ 更新狀態的icon  *****************//
function ChangeIcon(bmi){
        
        if(parseInt(bmi)<18.5){
           btn.setAttribute('class','bluebtn');
           document.querySelector('.bluebtn .value').textContent=bmi;
           document.querySelector('.bluebtn .bmi').textContent="BMI";
        }
        else if(parseInt(bmi)>=18.5 && parseInt(bmi)<25){
            btn.setAttribute('class','greenbtn');
           document.querySelector('.greenbtn .value').textContent=bmi;
           document.querySelector('.greenbtn .bmi').textContent="BMI";
        }
        else if(parseInt(bmi)>=25 && parseInt(bmi)<30){
            btn.setAttribute('class','brorgbtn');
           document.querySelector('.brorgbtn .value').textContent=bmi;
           document.querySelector('.brorgbtn .bmi').textContent="BMI";
        }
        else if(parseInt(bmi)>=30 && parseInt(bmi)<35){
            btn.setAttribute('class','orgbtn');
           document.querySelector('.orgbtn .value').textContent=bmi;
           document.querySelector('.orgbtn .bmi').textContent="BMI";
        }
        else if(parseInt(bmi)>=35 && parseInt(bmi)<40){
            btn.setAttribute('class','orgbtn');
           document.querySelector('.orgbtn .value').textContent=bmi;
           document.querySelector('.orgbtn .bmi').textContent="BMI";
        }
        else{
           btn.setAttribute('class','redbtn');
           document.querySelector('.redbtn .value').textContent=bmi;
           document.querySelector('.redbtn .bmi').textContent="BMI";
        }
}
function updateList(){
    var str="";
    var color="";
    var status="";
    getWData=localStorage.getItem('MyWeightItem');
    getWDataAry=JSON.parse(getWData);
    getHData=localStorage.getItem('MyHeightItem');
    getHDataAry=JSON.parse(getHData);
    getBMI=localStorage.getItem('MyBMIItem');
    getBMIAry=JSON.parse(getBMI);
    getTimeData=localStorage.getItem('MyTimeItem');
    getTimeAry=JSON.parse(getTimeData);

    var totallen=getBMIAry.length;
    //***************  遞檢無法使用   ***********************//
    for(var i=totallen-1;i>=0;i--){
        console.log(i);
        if (parseInt(getBMIAry[i])<18.5){
            color="skybluelist";
            status="過輕";
        }
        else if (parseInt(getBMIAry[i])>=18.5 && parseInt(getBMIAry[i])<25){
            color="greenlist";
            status="理想";
        }
        else if (parseInt(getBMIAry[i])>=25 && parseInt(getBMIAry[i])<30){
            color="brorglist";
            status="過重";
        }
        else if (parseInt(getBMIAry[i])>=30 && parseInt(getBMIAry[i])<35){
            color="orglist";
            status="輕度肥胖"
        }
        else if (parseInt(getBMIAry[i])>=35 && parseInt(getBMIAry[i])<40){
            color="orglist";
            status="中度肥胖";
        }
        else if (parseInt(getBMIAry[i])>=40){
            color="redlist";
            status="重度肥胖";
        }
        str+='<ul  class="'+color+'"id="colorID"><li class="status">'+status+'</li><li class="bmivalue"><span>BMI</span>'+getBMIAry[i]+'</li><li class="height"><span>height</span>'+getHDataAry[i]+'</li><li class="weight"><span>weight</span>'+getWDataAry[i]+' </li><li>'+getTimeAry[i]+'<li></ul>'
        // document.querySelector('.status').textContent=status;
        // document.getElementById('colorID').setAttribute('class',color);
        }
    list.innerHTML=str;
}

btn.addEventListener('click',BMIest,false);