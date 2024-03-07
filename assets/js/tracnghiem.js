document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

    // Thu thập các câu trả lời từ người dùng
    var responses = {};
    var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var textAreas = document.querySelectorAll('textarea');

    // Lặp qua các nút radio và lấy giá trị của chúng
    radioButtons.forEach(function(radioButton) {
        responses[radioButton.name] = radioButton.value;
    });

    // Lặp qua các ô checkbox và lấy giá trị của chúng
    checkboxes.forEach(function(checkbox) {
        if (!responses[checkbox.name]) {
            responses[checkbox.name] = [];
        }
        responses[checkbox.name].push(checkbox.value);
    });

    // Lặp qua các vùng văn bản và lấy giá trị của chúng
    textAreas.forEach(function(textArea) {
        responses[textArea.name] = textArea.value;
    });

    // Hiển thị câu trả lời của người dùng
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<h2>Kết quả</h2>";
    for (var question in responses) {
        var answer = responses[question];
        resultContainer.innerHTML += "<p>Câu hỏi: " + question + "</p>";
        resultContainer.innerHTML += "<p>Trả lời: " + answer + "</p><br>";
    }
    
    // Cuộn đến khu vực hiển thị kết quả
    resultContainer.scrollIntoView({behavior: 'smooth'});
});
