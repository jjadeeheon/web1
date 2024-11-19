const type = document.querySelectorAll(".type"); //영타자
const firstsearch = document.querySelector("#firstsearch"); //영타자 검색창
const persuade = document.querySelector("#persuade"); // 설득 검색창
const searchslot = document.querySelector("#slotsearch"); //슬롯 검색
const modalcookie = document.querySelector(".modalcookie"); // 쿠키 모달
const modalcookieClose = document.querySelector(".close_cookiebtn"); // 쿠키 모달 닫기 버튼
const squareforad = document.querySelector("#squareforad"); //새로고침 박스
const new1 = document.querySelector("#new"); //새로고침 문구
const new2 = document.querySelector("#newnew"); //새로고침 문구
const new3 = document.querySelector("#newnewnew"); //새로고침 문구
const title = document.querySelector("#title"); //타이틀
const magnifying_glass = document.querySelector("#magnifying-glass");
const horizontal_line = document.querySelector("#horizontal_line");
const vertical_line = document.querySelector("#vertical_line");
const retryicon = document.querySelector("#retryicon");
const homeicon = document.querySelector("#homeicon");
const designed = document.querySelector("#designed");
const windowstyle = document.querySelector(".windowstyle");
const instaalarm = document.querySelector("#instaalarm");
const click1 = document.querySelector("#click1");
const click2 = document.querySelector("#click2");
const click3 = document.querySelector("#click3");
const lastsquare = document.querySelector("#lastsquare"); 

// prompt 파라미터는 입력 메세지
 var input = prompt("아이디를 입력해주세요");
 console.log(input);


// 쿠키 모달 닫기 버튼 클릭 시
modalcookieClose.addEventListener('click', function() {
    modalcookie.style.display = 'none';
});

console.log(modalcookie);
// 쿠키 모달 닫기 버튼 클릭 시


//영타자 모션
    let count = -1;
    setInterval(function() {
    if( count < type.length - 1 ) {
        count += 1; 
        
    }
    type[count].style.display = "block";
    }, 50);
//영타자 모션

//영타자 누르면 없어지기
    let isSearchClicked = false;
    firstsearch.addEventListener("mousedown", function() {
        if(isSearchClicked === false) {
            isSearchClicked = true;
            firstsearch.style.display = "none";  
            modalcookie.style.display = "block";
        } else {
            isSearchClicked = false;
            firstsearch.style.display = "block";
        }

        console.log(isSearchClicked);
    });
// 영타자 누르면 없어지기

//설득창 누르면 없어지기
    persuade.addEventListener("mousedown", function() {
        if(isSearchClicked === true) {
            isSearchClicked = false;
            persuade.style.display = "none";  
        } else {
            isSearchClicked = false;
            persuade.style.display = "block";
        }

        console.log(isSearchClicked);
    });
//설득창 누르면 없어지기

let isSlotClicked = false;
//라스베가스 슬롯머신 검색창 누르면 요소가 사라지기 & 크기 작아지기 & 위치 옮기기
searchslot.addEventListener("mousedown", function() {
    if(isSlotClicked=== false) {
        horizontal_line.style.display = "block";
        vertical_line.style.display = "block";
        
        magnifying_glass.style.left = 1590 + "px";
        magnifying_glass.style.top = 218 + "px";

        searchslot.style.transform = "scale(0.9)";
        searchslot.style.position = "relative";
        searchslot.style.left = 1100 + "px";
        searchslot.style.top = 200 + "px";
        
        title.style.transform = "scale(0.8)";
        title.style.position = "absolute";
        title.style.left = 100 + "px";
        title.style.top = 150 + "px";

        retryicon.style.display = "block";
        homeicon.style.display = "block";

        new1.style.display = "block";
        // new2.style.display = "block";
        // new3.style.display = "block";
        
        isSlotClicked= true;

    } 

    console.log(isSlotClicked);
});


let _clickCount = 1;
  retryicon.addEventListener("mousedown", function() {
         if( _clickCount === 1 ) {
            new2.style.display = "block";
         }
         if( _clickCount === 2 ) {
            new3.style.display = "block";

         }
         if( _clickCount === 3 ) {
             retryicon.style.cursor = "default";

             const userInputDiv = document.querySelector("#username");
             userInputDiv.textContent = "[" + input + "]"; // 사용자의 입력값을 설정/ 찾아서 뿌듯해....
        
             instaalarm.style.display = "block";
             window.alert("우리는 그걸 간헐적 정적 강화라고 합니다.")
             retryicon.classList.add("active");
            }
         _clickCount++;
    
         console.log(_clickCount);
     });

let isalarmClicked = false;
instaalarm.addEventListener("mousedown", function() {
    if ( isalarmClicked = false) {
        isalarmClicked = true;
        click1.style.display = "none";  
    } else {
        squareforad.style.display = "block";
        click1.style.display = "block";
        //instaalarm.classList.add("exitinstagram");
    }
})

let isHomeClicked = 1;
     homeicon.addEventListener("mousedown", function() {
        if(isHomeClicked === 1, _clickCount3 >= 1) {
            new1.style.display = "none";
            new2.style.display = "none";
            new3.style.display = "none";
            squareforad.style.display = "none";
            vertical_line.style.display = "none";
            horizontal_line.style.display = "none";
            homeicon.style.display = 'none';
            retryicon.style.display = 'none';
            searchslot.style.display = "none";
            instaalarm.style.display = "none";

            designed.style.display = "block";

            magnifying_glass.style.position = "fixed";
            magnifying_glass.style.left = "595px";
            magnifying_glass.style.top = "367px";
            
            title.style.transform = "scale(1)";
            title.style.position = "fixed";
            title.style.left = "39%";
            title.style.top="200px";

        } else {

        }
     });

designed.addEventListener("mousemove", function () {
})

//슬롯검색 누르면 useme 나오기
// squareforad.addEventListener("mousemove", function() {
//     if(isSearchClicked === false) {
//         isSearchClicked = true;
//         click1.style.display = "none";  
//     } else {
//         isSearchClicked = false;
//         click1.style.display = "block";
//     }

//     console.log(isSearchClicked); 
// });
//슬롯검색 누르면 useme 나오기


//첫번째 버튼
let _clickCount1 = 0; //버튼을 클릭하고 나서를 위한 값
let is1Clicked = false; //useme 버튼을 위한 값

//useme 누르면 마우스 따라 움직이고 놓으면 그 자리에

window.addEventListener("mousemove", function( event ) {
    x = event.clientX;
    y = event.clientY;
    console.log( event.clientX, event.clientY );

    if( is1Clicked=== false ) {
        click1.classList.remove( "selected");
    } else if (is1Clicked=== true ) {
        click1.classList.add("selected");
        click1.style.position = "fixed";
        click1.style.left = x - click1.offsetWidth / 2 + "px";
        click1.style.top = y - click1.offsetHeight / 2  + "px";
    }
});
//useme 누르면 마우스 따라 움직이고 놓으면 그 자리에


//useme 한번 더 누르면 programming 나옴
 click1.addEventListener("mousedown", function() {
     if(is1Clicked=== false) {
         is1Clicked= true;
        
     } else if(is1Clicked=== true ) {
         is1Clicked= false;
    
     }

     console.log( is1Clicked);

     if( _clickCount1 === 1 ) {
        click1.style.animation = "none";
        click1.style.position = "absolute";
        click1.style.left = x + "px";
        click1.style.top = y  + "px";
        window.alert("언제 뜰지도 모르고 뭐가 뜰지도 모르는 게 라스베가스의 슬롯 머신과 완전히 똑같죠.")
        //is1Clicked = "null";

     }

     _clickCount1 += 1;

     console.log(_clickCount1);
 });
 //useme 한번 더 누르면 programming 나옴

//useme 한번 누르면 clickme 나오게 하기
 let count1 = 0;
 click1.addEventListener("mousedown", function() {
     if( count1 === 1 ) {
         click2.style.display = "block";
         click1.style.position = "absolute";
     }


     count1++;
 });
//useme 한번 누르면 clickme 나오게 하기
//첫번째버튼

//두번째버튼
let _clickCount2 = 0; //버튼을 클릭하고 나서를 위한 값
let is2Clicked = false; //useme 버튼을 위한 값

//clickme 누르면 마우스 따라 움직이고 놓으면 그 자리에
window.addEventListener("mousemove", function( event ) {
    x = event.clientX;
    y = event.clientY;
    console.log( event.clientX, event.clientY );

    if( is2Clicked=== false ) {
        click2.style.position = "fixed";
        click2.style.left = x - click2.offsetWidth / 2 + "px";
        click2.style.top = y - click2.offsetHeight / 2  + "px";

        
        click2.classList.add("selected");
    } else if (is2Clicked=== true ) {
        click2.classList.remove("selected");
        click2.style.position = "absolute";
    }
});
//clickme 누르면 마우스 따라 움직이고 놓으면 그 자리에


//clickme 한번 더 누르면 secretly 나옴
click2.addEventListener("mousedown", function() {
    if(is2Clicked=== false) {
        is2Clicked= true;
        
    } else if(is2Clicked=== true ) {
        is2Clicked= false;
    
    }

    console.log( is2Clicked);

    if( _clickCount2 === 0 ) {
        click2.style.animation = "none";
        click2.style.position = "absolute";
        click2.style.left = x + "px";
        click2.style.top = y  + "px";
        window.alert("상품을 계속해서 쓰게 만드는 것도 모자라서 뇌간 깊숙한 곳으로 들어가 여러분들에게 무의식적인 습관을 심어서 심층부에서부터 프로그래밍을 하는 겁니다. 아주 은밀하게 말이죠.")
        //is2Clicked = "null";

        // secretly.style.display = "block";
        // secretly.style.left = x + "px";
        // secretly.style.top = y + "px";

        // click2.style.display = "none";

    }

    _clickCount2 += 1;

    console.log(_clickCount2);
});
//clickme 한번 더 누르면 secretly 나옴

//clickme 한번 누르면 clickme 나오게 하기
let count2 = 0;
click2.addEventListener("mousedown", function() {
    if( count2 === 0 ) {
        click3.style.display = "block";
    
    }


    count2++;
});
//clickme 한번 누르면 clickme 나오게 하기
//두번째버튼

//세번째버튼
let _clickCount3 = 0;
let is3Clicked = false;
//chooseme 누르면 마우스 따라 움직이고 놓으면 그 자리에
window.addEventListener("mousemove", function( event ) {
    x = event.clientX;
    y = event.clientY;
    console.log( event.clientX, event.clientY );

    if( is3Clicked=== false ) {
        click3.style.position = "fixed";
        click3.style.left = x - click3.offsetWidth / 2 + "px";
        click3.style.top = y - click3.offsetHeight / 2  + "px";

        
        click3.classList.add("selected");
    } else if (is3Clicked=== true ) {
        click3.classList.remove( "selected");
        click3.style.position = "absolute";
    }
});
//chooseme 누르면 마우스 따라 움직이고 놓으면 그 자리에


//chooseme 한번 더 누르면 secretly 나옴
click3.addEventListener("mousedown", function() {
    if(is3Clicked=== false) {
        is3Clicked= true;
        
    } else if(is3Clicked=== true ) {
        is3Clicked= false;
    
    }

    console.log( is3Clicked);

    if( _clickCount3 === 0 ) {
        click3.style.animation = "none";
        click3.style.position = "absolute";
        click3.style.left = x + "px";
        click3.style.top = y  + "px";
        window.alert("책상 위의 스마트폰을 볼 때마다 계속 눈이 가고, 손이 가기 마련이에요. 재밌는 게 있을 것 같거든요. 그리고, 슬롯머신을 당겨 보는 거죠. 방금 여러분이 한 것처럼요")
        //is3Clicked = "null";

        homeicon.style.cursor = "pointer";
        homeicon.style.filter = "blur(0px)";
        homeicon.classList.add("active");
    }

    _clickCount3 += 1;

    console.log(_clickCount3);
});
//chooseme 한번 더 누르면 secretly 나옴
//세번째버튼


designed.addEventListener("mouseover", function() {
    lastsquare.style.display = "block";
});

designed.addEventListener("mouseout", function() {
    lastsquare.style.display = "none";
});

