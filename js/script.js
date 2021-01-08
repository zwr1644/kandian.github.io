function clearInputer(){
    document.getElementById("inputer").value="";
}
function copyToClip() {
    var content=document.getElementById('result').innerHTML;
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}
function setResult(str){
  var result=document.getElementById("result");
  result.innerHTML=str;
}
function getInput(){
  fre="获取失败";
  var inputer=document.getElementById("inputer");
  var kdlink=inputer.value;
  if(kdlink==""){
    setResult("请输入看点链接！");
  }else{
    kdlink=unescape(kdlink);//2021-1-8修复
    kdlink=kdlink.replace("https://kandian.qq.com/mqq/vue/main?","");
    var kvl=kdlink.split("&");
    for (i=0;i<kvl.length;i++){
      if(kvl[i].search("accountId")!=-1){
        fre=kvl[i];
        fre=fre.replace("accountId=","");
        var decode = atob(fre);
        fre = decodeURI(decode);
        if (fre===""){
            fre="获取失败"
        }
      }
    }
    setResult(fre);
  }	 
}
