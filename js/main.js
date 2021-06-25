function init() {
    $("#copy-qq").hide()
    $("#qb-copy-result").hide()
    qylink = new Vue({
        el: "#qy-link-maker",
        data: {
            link: "",
        }
    })
    dataQb = new Vue({
        el: "#qb-qy",
        data: {
            phonenumber: ""
        }
    })
}

function copyToClip(id) {
    var content = document.getElementById(id).innerHTML;
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("Copy");
    document.body.removeChild(aux);
}

function chaqb() {
    dataQb.phonenumber = ""
    $("#qb-copy-result").hide()
    var qqhao = document.getElementById("qb-qq-input").value
    if (qqhao.length === 0) {
        alert("ID不能为空")
        return
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "php/qb.php?username=" + qqhao, false);
    xmlhttp.send();
    dataQb.phonenumber = xmlhttp.responseText;
    $("#qb-copy-result").show()
}

function chakandian() {
    $("#copy-qq").hide()
    qylink.link = ""
    var kdlink = document.getElementById("id-input").value
    if (kdlink.length === 0) {
        alert("ID不能为空")
        return
    }
    var fre = "获取失败";
    kdlink = unescape(kdlink); //2021-1-8修复
    kdlink = kdlink.replace("https://kandian.qq.com/mqq/vue/main?", "");
    var kvl = kdlink.split("&");
    for (i = 0; i < kvl.length; i++) {
        if (kvl[i].search("accountId") != -1) {
            fre = kvl[i];
            fre = fre.replace("accountId=", "");
            var decode = atob(fre);
            fre = decodeURI(decode);
            if (fre === "") {
                fre = "获取失败"
            }
        }
    }
    qylink.link = fre;
    $("#copy-link").show()
}