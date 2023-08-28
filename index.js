function sc() {
    var gt = document.getElementById("gt0").value;
    var result = "";
    for (var i = 0; i < gt.length; i++) {
        result += gt[i] + "!";
    }
    if (confirm("正在生成，是否要继续？")) {
        document.getElementById("result").innerText = result;
    }
}

