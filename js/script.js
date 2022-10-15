$("#btn").on("click", function () {
    // const randomNum = Math.ceil(Math.random() * 2);
    // const str1 = $("#form").val();
    const inputWord = $("#form").val();
    const keyword = "apple";
    let result = "";

    if (inputWord === keyword) {
        result = "ログイン成功!";
    } else {
        result = "失敗...";
    }
    console.log(inputWord);
    $("#result").html(result);
});
