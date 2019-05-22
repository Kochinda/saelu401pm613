// チェックボタンがクリックされたら答えを出す
let checkBtn = document.getElementById('check1');

checkBtn.addEventListener('click', function () {

    let answer1 = document.getElementById('answer1');

    answer1.textContent = 'こたえは、 3 きのうのばん';
    answer1.style.color = 'red';

    // 画面の表示 
    let marubatu = document.getElementById('marubatu');
    let q1 = document.getElementsByClassName("q1");
    marubatu.textContent = checkAnswer(q1);

    

});

let checkBtn2 = document.getElementById('check2');
checkBtn2.addEventListener('click', function () {

    let answer2 = document.getElementById('answer2');

    answer2.textContent = 'こたえは、4 チケット';
    answer2.style.color = 'red';

    // 答えの判定の 画面の表示 
    let marubatu2 = document.getElementById('marubatu2');
    let q2 = document.getElementsByClassName("q2");
    marubatu2.textContent = checkAnswer(q2);


});

let checkBtn3 = document.getElementById('check3');
checkBtn3.addEventListener('click', function () {

    let answer3 = document.getElementById('answer3');

    answer3.textContent = 'こたえは、１ たのしみだ';
    answer3.style.color = 'red';

    // 答えの判定の 画面の表示 
    let marubatu3 = document.getElementById('marubatu3');
    let q3 = document.getElementsByClassName("q3");
    marubatu3.textContent = checkAnswer(q3);


});

let clearBtn = document.getElementById('clear');

    clearBtn.addEventListener('click', function (){
        // remove P TAGを取得する
        let removeP = document.getElementsByClassName("remove");
       
        // 取得できてるか確認する
        console.log(removeP);

        // 取得したremoveP(配列的なデータ）を繰り返し処理する
        for ( let i = 0; i < removeP.length; i++) {
            
            // 配列のデータがすべて取得できているか確認する
            console.log(removeP[i]);

            // タグのコンテンツを空白にする処理
            removeP[i].textContent = '';
        }

        // removeP.remove();ではできない。



    });

function checkAnswer(choices) {


    let result;
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            result = choices[i].value;
            break;
        }
    }

    if (result == 1) {
        return "〇";
    } else {
        return "✖";
    }

}


// クリアのボタンがクリックされたら、




// 答えのＰタグを EMPTY REMOVEする
//FORＭたぐで囲んだら ボタンにタイプボタンを書く

// html でクリアボタンが押されたら、けすグループのクラスを作る。
// 


// // SCOREボタンがクリックされたら得点を表示
// let scoreBtn = document.getElementById('score');

// scoreBtn.addEventListener('click', function () {
//     let total = document.getElementById('totalPoint');

//     total.textContent = 'YOUR SCORE IS ?? OUT OF 10';
// });

// $(function () {
//     $("#clear").click(offradio){
//         function offradio() {
//             var ElementsCount = document.sample.elements.length; // ラジオボタンの数
//             for (i = 0; i < ElementsCount; i++) {
//                 document.sample.elements[i].checked = false;
//             }
//         }



//     }


    

// });




// 答えの判定







