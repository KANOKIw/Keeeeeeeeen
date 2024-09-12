const org_data = [
    {
        "name":"Let's tennis(テニス部)",
        "floor":"1階",
        "class":"テニスコート・校庭",
        "type":"undou",
    },
    {
        "name":"軟式野球部",
        "floor":"1階",
        "class":"校庭",
        "type":"undou",
    },
    {
        "name":"三心会バザー",
        "floor":"1階",
        "class":"選択教室2・3",
        "type":"",
    },
    {
        "name":"生徒会執行部",
        "floor":"1階",
        "class":"生徒会室",
        "type":"doukou",
    },
    {
        "name":"ちぎり絵などの作品展示",
        "floor":"2階",
        "class":"1A ~ 1E",
        "type":"class",
    },
    {
        "name":"1、2年有志",
        "floor":"2階",
        "class":"2A",
        "type":"yuusi",
    },
    {
        "name":"模型製作会",
        "floor":"2階",
        "class":"2B 前方",
        "type":"yuusi",
    },
    {
        "name":"模型研究会",
        "floor":"2階",
        "class":"2B 後方",
        "type":"doukou",
    },
    {
        "name":"旃檀林書道展(書道部)",
        "floor":"2階",
        "class":"2C 前方",
        "type":"bunka",
    },
    {
        "name":"囲碁・将棋同好会",
        "floor":"2階",
        "class":"2C 後方",
        "type":"doukou",
    },
    {
        "name":"鉄道研究同好会",
        "floor":"3階",
        "class":"2D・2E",
        "type":"doukou",
    },
    {
        "name":"3年クラス展示",
        "floor":"3階",
        "class":"3A ~ 3E",
        "type":"class",
    },
    {
        "name":"何でも占い",
        "floor":"3階",
        "class":"選択教室4",
        "type":"yuusi",
    },
    {
        "name":"不思議な檻宮",
        "floor":"3階",
        "class":"選択教室5",
        "type":"yuusi",
    },
    {
        "name":"柔道部",
        "floor":"3階",
        "class":"4A",
        "type":"undou",
    },
    {
        "name":"FDK有志",
        "floor":"3階",
        "class":"4B",
        "type":"yuusi",
    },
    {
        "name":"放課後レジンとか製作所",
        "floor":"3階",
        "class":"4C",
        "type":"yuusi",
    },
    {
        "name":"とある剣道部がカジノしてみた",
        "floor":"3階",
        "class":"4D",
        "type":"undou",
    },
    {
        "name":"Magic life(マジック同好会)",
        "floor":"4階",
        "class":"4E",
        "type":"doukou",
    },
    {
        "name":"コーヒーカップ(陸上部)",
        "floor":"4階",
        "class":"4F",
        "type":"undou",
    },
    {
        "name":"推理ゲーム",
        "floor":"4階",
        "class":"5A",
        "type":"yuusi",
    },
    {
        "name":"獅子児祭り",
        "floor":"4階",
        "class":"5B",
        "type":"yuusi",
    },
    {
        "name":"光る歴史部へ",
        "floor":"4階",
        "class":"5C",
        "type":"bunka",
    },
    {
        "name":"文芸部",
        "floor":"4階",
        "class":"5D",
        "type":"bunka",
    },
    {
        "name":"お化け屋敷",
        "floor":"4階",
        "class":"5E・5F",
        "type":"yuusi",
    },
    {
        "name":"ドローン研究同好会",
        "floor":"4階",
        "class":"6A",
        "type":"doukou",
    },
    {
        "name":"地理部・英語部",
        "floor":"4階",
        "class":"6B 前方",
        "type":"bunka",
    },
    {
        "name":"地理部",
        "floor":"4階",
        "class":"6B 後方",
        "type":"bunka",
    },
    {
        "name":"じゃんじゃん麻雀",
        "floor":"4階",
        "class":"6C 前方",
        "type":"yuusi",
    },
    {
        "name":"英語ゲーム!!(英語部)",
        "floor":"4階",
        "class":"6C 後方",
        "type":"bunka",
    },
    {
        "name":"オリジナルカードゲーム対戦会",
        "floor":"4階",
        "class":"6D 前方",
        "type":"yuusi",
    },
    {
        "name":"ワールドボードゲーム",
        "floor":"4階",
        "class":"6D 後方",
        "type":"yuusi",
    },
    {
        "name":"世田谷タイムアタック!!",
        "floor":"4階",
        "class":"6E",
        "type":"yuusi",
    },
    {
        "name":"仏教青年会",
        "floor":"観性館 1階",
        "class":"禅堂",
        "type":"doukou",
    },
    {
        "name":"パソコン研究同好会",
        "floor":"観性館 2階",
        "class":"パソコン室",
        "type":"doukou",
    },
    {
        "name":"美術部",
        "floor":"観性館 3階",
        "class":"美術室",
        "type":"bunka",
    },
    {
        "name":"Aqua Riders(水泳部)",
        "floor":"修道館 地下2階",
        "class":"プール場",
        "type":"undou",
    },
    {
        "name":"アタック31(卓球部)",
        "floor":"修道館 4階",
        "class":"卓球場",
        "type":"undou",
    },
    {
        "name":"かがく処 せた庵(化学部)",
        "floor":"放光館 2階",
        "class":"化学実験室",
        "type":"bunka",
    },
    {
        "name":"物理部",
        "floor":"放光館 3階",
        "class":"物理実験室・講義室",
        "type":"bunka",
    },
    {
        "name":"いきものがたり(生物部)",
        "floor":"放光館 4階",
        "class":"生物実験室",
        "type":"bunka",
    },





    // "{
    //     "name":"",
    //     "floor":"",
    //     "class":"",
    // },
];


for (var n = 0; n < Object.keys(org_data).length; n++){

document.getElementById("org-list-org").innerHTML += 

`<div><p id="org-name">`
 + org_data[n]["name"]
 + `</p><p id="org-floor">`
 + org_data[n]["floor"]
 + `</p><p id="org-class">`
 + org_data[n]["class"]
 + `</p></div>`;

};

function handleSelectionOrg() {
    var selectBox = document.getElementById("selectbox");
    var selectedValue = selectBox.value;
    

    if (selectedValue === "all-org") {
        sort_all_org();
    } else if (selectedValue === "class") {
        sort_class();
    } else if (selectedValue === "yuusi") {
        sort_yuusi();
    } else if (selectedValue === "undou") {
        sort_undou();
    } else if (selectedValue === "bunka") {
        sort_bunka();
    } else if (selectedValue === "doukou") {
        sort_doukou();
    };
};

function sort_all_org() {
    document.getElementById("org-list-org").innerHTML = ``

    for (var n = 0; n < Object.keys(org_data).length; n++){

        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        
        };
};

function sort_class(){
    document.getElementById("org-list-org").innerHTML = ``
    
    for (var n = 0; n < Object.keys(org_data).length; n++){
        if (org_data[n]["type"] === "class"){
        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        


        };
    };
};

function sort_yuusi() {
    document.getElementById("org-list-org").innerHTML = ``
    
    for (var n = 0; n < Object.keys(org_data).length; n++){
        if (org_data[n]["type"] === "yuusi"){
        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        


        };
    };    
};

function sort_undou() {
    document.getElementById("org-list-org").innerHTML = ``
    
    for (var n = 0; n < Object.keys(org_data).length; n++){
        if (org_data[n]["type"] === "undou"){
        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        


        };
    };    
};

function sort_bunka() {
    document.getElementById("org-list-org").innerHTML = ``
    
    for (var n = 0; n < Object.keys(org_data).length; n++){
        if (org_data[n]["type"] === "bunka"){
        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        


        };
    };    
};

function sort_doukou() {
    document.getElementById("org-list-org").innerHTML = ``
    
    for (var n = 0; n < Object.keys(org_data).length; n++){
        if (org_data[n]["type"] === "doukou"){
        document.getElementById("org-list-org").innerHTML += 
        
        `<div><p id="org-name">`
        + org_data[n]["name"]
        + `</p><p id="org-floor">`
        + org_data[n]["floor"]
        + `</p><p id="org-class">`
        + org_data[n]["class"]
        + `</p></div>`;
        


        };
    };    
};