// setTimeout(() => {
//         // document.querySelectorAll.bind(document).classList.remove("plancehoder")
//     var a = `.a`
//         $(a).removeClass("plancehoder");
// }, 2000);
fetch("https://62467c8de3450d61b0ff47aa.mockapi.io/user")
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        $.map(data, function (elementOrValue, indexOrKey) {
            console.log(elementOrValue.name);
            $(".list-content ul").append(`
                <li class="item">
                    <div class="avatar"><img src="${elementOrValue.avatar}" alt="" srcset=""></div>
                    <div class="infor">
                        <label class="name">${elementOrValue.name}</label>
                        <label class="addre">${elementOrValue.decription}</label>
                    </div>
                </li>
            `);
        });
        var a = `.a`
        $(a).removeClass("plancehoder");
        $(".list-head").css("border-bottom", "1px solid #000000")
        $(".form-control").attr("placeholder", "Search...");
    })

// Search
function search() {
    const searchBox = document.getElementById("search").value.toUpperCase();
    const item = document.querySelectorAll(".item");
    const lname = document.getElementsByClassName("name");
    
    for (let i = 0; i < lname.length; i++) {
        let match = item[i];
        
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                item[i].style.display = "";
            }else{
                item[i].style.display = "none";
            }
        }
    }
}
