const indicator = document.querySelector('.indicator')
let theme  = localStorage.getItem('theme')
const changeTheme = (themeNumber) => {
    let indicatorStyle = indicator.style;
    let rootElement = document.documentElement;
    if(themeNumber == 'theme-one'){
        indicatorStyle.left = '3px'
        indicatorStyle.transform = 'translateX(0%)'
        rootElement.classList.remove('theme-three', 'theme-two')  
        localStorage.setItem('theme', 'theme-one')
        document.querySelector('.attribution').style.color= "hsl(6, 63%, 50%)";
        // document.querySelector('.creater').style.color="hsl(0, 0%, 93%)";
        document.querySelector('.creater2').style.color="hsl(0, 0%, 93%)";
    }else if(themeNumber == 'theme-two'){
        indicatorStyle.left = '50%'
        indicatorStyle.transform = 'translateX(-50%)'
        rootElement.classList.remove('theme-three')      
        rootElement.classList.add('theme-two') 
        localStorage.setItem('theme', 'theme-two')    
        document.querySelector('.attribution').style.color="rgb(187, 66, 18)";
        // document.querySelector('.creater').style.color="hsl(185, 58%, 25%)";
        document.querySelector('.creater2').style.color="hsl(185, 58%, 25%)";
    }else{
        indicatorStyle.right = '3px'
        indicatorStyle.left = 'auto'
        indicatorStyle.transform = 'translateX(0%)'  
        rootElement.classList.remove('theme-two')      
        rootElement.classList.add('theme-three') 
        localStorage.setItem('theme', 'theme-three')   
        document.querySelector('.attribution').style.color= ""; 
        // document.querySelector('.creater').style.color= "hsl(177, 92%, 70%)";
        document.querySelector('.creater2').style.color= "hsl(177, 92%, 70%)";
    }
}

changeTheme(theme);
// js for visitor count
var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);
  nums = n.toString().split('').map(Number)
 console.log(nums);
  document.getElementById('CounterVisitor').innerHTML = '';
  var i;
  for (i=6;i>nums.length;i--) {
     var cla= "counter counter-item-"+i;
    
    var claa="<div class="+cla+">" +  0+ '</div>';
     if(i>nums.length){
    document.getElementById('CounterVisitor').innerHTML += claa}
  }
  for (i=0;i<nums.length;i++){
    var cla= "counter counter-item-"+(i+1);
    var claa="<div class="+cla+">" +  nums[i]+ '</div>';
  document.getElementById('CounterVisitor').innerHTML += claa}
