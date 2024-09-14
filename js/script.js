// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push, set } 
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// <<<<< mypage.htmlのjquery >>>>>
$(document).ready(function() {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "***",
        authDomain: "***",
        projectId: "***",
        storageBucket: "***",
        messagingSenderId: "***",
        appId: "***"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const dbRef = ref(db, "PVFCT")


    // 都道府県のオプションを設定
    const prefectures = ["福島県", "千葉県", "愛媛県", "福岡県"];
    const $prefectureSelect = $('select[name="prefecture"]');

    prefectures.forEach(function(prefecture) {
        $prefectureSelect.append('<option value="' + prefecture + '">' + prefecture + '</option>');
    });

    // 都道府県に紐付くエリア名
    const primaryAreas = {
        "福島県": ["中通り", "浜通り", "会津"],
        "千葉県": ["北東部", "北西部", "南部"],
        "愛媛県": ["東予", "中予", "南予"],
        "福岡県": ["福岡地方", "北九州地方", "筑豊地方", "筑後地方"]
    };

    function saveDataToFirebase() {
        const data = {
            companyName: $('#CompanyName').val(),
            FCTUnitName: $('#FCT_unit_Name').val(),
            PVGroupCapacity: $('#PVgroup_capacity').val(),
            PCSGroupCapacity: $('#PCSgroup_capacity').val(),
            direction: $('#direction').val(),
            angle: $('#angle').val(),
            conversionEfficiency: $('#conversion_efficiency').val(),
            lossRate: $('#loss_rate').val(),
            prefecture: $prefectureSelect.val(),
            primaryWxArea: $('select[name="primary_wx_area"]').val(),
            timestamp: Date.now()
        };

        // 全ての項目が入力されているか確認
        if (Object.values(data).some(value => !value)) {
            alert("全ての項目を入力してください。");
            return;
        }

        // Realtime Databaseにデータを保存
        const newPostRef = push(dbRef);
        set(newPostRef, data)
            .then(() => {
                alert("データが保存されました。");

                // 現在の日時を取得して表示
                const currentDate = new Date();
                const formattedDate = currentDate.toLocaleString(); // ロケールに基づいた形式で日時を表示
                $('#timestampDisplay').text(`${formattedDate} 更新`);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    // 都道府県の選択が変更されたときに発生するイベント
    $prefectureSelect.change(function() {
        const selectedPrefecture = $(this).val();
        const $primaryAreaSelect = $('select[name="primary_wx_area"]');

        // エリア名のセレクトボックスをクリア
        $primaryAreaSelect.empty();
        $primaryAreaSelect.append('<option value="">--最寄りエリア--</option>');

        // 選択された都道府県に紐付くエリア名を追加
        if (selectedPrefecture in primaryAreas) {
            primaryAreas[selectedPrefecture].forEach(function(area) {
                $primaryAreaSelect.append('<option value="' + area + '">' + area + '</option>');
            });
        }
    });

    // ボタンにイベントリスナーを設定
    $('#apply_button').click(function() {
        saveDataToFirebase();
    });
});


// <<<<< login.htmlのjquery >>>>>
$(document).ready(function(){
    function GoTo_mypage() {
        var id = $('input[name="id"]').val();
        var pwd = $('input[name="pass"]').val();
        
        // IDとパスワードが一致した場合のみmypage.htmlへ遷移
        if (id === "user" && pwd === "password") {
            window.location.href = "mypage.html";
        } else {
            alert("IDまたはパスワードが間違っています。");
        }
    }

    // 認証ボタンがクリックされたときにGoTo_mypageを呼び出す
    $('.certification_btn button').on('click', function() {
        GoTo_mypage();
    });
});