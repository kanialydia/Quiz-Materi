function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<br><h1>Result</h1><br>";
    gameOverHTML += "<h2 id='score'> Correct Answer: " + quiz.score + " From 10 Question</h2>";
	gameOverHTML += "<h1 id='score'> " + quiz.score * 10+"</h2><br><br>";
	gameOverHTML += "<p><a class='s-12 submit-form button background-primary text-white' href='sql-select-record.html'>FINISH</a></p>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions materi 1
var questions = [
    new Question("Syntax manakah yang benar untuk menampilkan data baik secara keseluruhan atau hanya beberapa bagian saja.?<br><br>A. SELECT * FROM table_name; atau SELECT column_name,column_name FROM table_name;<br>B. SELECT DISTINCT column_name,column_name FROM table_name;<br>C. WHERE column_name operator value;<br>D. ORDER BY column_name,column_name ASC|DESC;", ["A", "B","C","D"], "A"),
    new Question("Syntax apa yang digunakan untuk menampilkan data secara keseluruhan atau hanya beberapa bagian saja.?", ["Update", "Select", "Delete", "Order by"], "Select"),
    new Question("Syntax manakah yang benar untuk menampilkan email dan matpel pada tabel Data Guru.?<br>A. SELECT gu_email.gu_matpel FROM Data_Guru;<br>B. SELECT gu_email-gu_matpel FROM Data_Guru;<br>C. SELECT gu_email,gu_matpel FROM Data_Guru;<br>D. SELECT gu_nama=gu_matpel FROM Data_Guru;<br>", ["A", "B","C", "D"], "C"),
    new Question("Syntax apa yang digunakan untuk menampilkan salah satu saja jika didalam tabel ada yang sama.?", ["Select", "Update", "Delete", "Select Distinct"], "Select Distinct"),
    new Question("Menampilkan hasil query mysql jika ada row yang isinya sama, maka hanya akan diambil salah satu nya saja adalah fungsi dari.?", ["Select Distinct", "Delete", "Update", "Where"], "Select Distinct"),
	new Question("Syntax apa yang digunakan untuk menentukan suatu pilihan atau kondisi tertentu.?", ["Where", "Not", "Or", "And"], "Where"),
	new Question("Memilih nilai yang memiliki kondisi sama antara kondisi1 dan kondisi adalah fungsi dari.?", ["Where", "Not", "Or", "And"], "And"),
	new Question("Kondisi yang ingin menampilkan data dengan keadaan atau adalah fungsi dari.?", ["Where", "Not", "Or", "And"], "Or"),
	new Question("Syntax manakah yang benar untuk menggunakan AND.?<br><br>A. SELECT * FROM namatabel where kondisi1=’..’ NOT kondisi = ‘…’<br>B. SELECT * FROM namatabel where namakolom = “kondisi”<br>C. SELECT * FROM namatabel where kondisi1=’..’ AND kondisi = ‘…’<br>D. SELECT * FROM namatabel where kondisi1=’..’ OR kondisi = ‘…’", ["A", "B", "C", "D"], "C"),
	new Question("Syntax manakah yang benar untuk menampilkan data guru yang berasal dari bogor.?<br><br>A.	SELECT * FROM Data_Guru WHERE gu_alamat = ‘Bogor’<br>B.	SELECT * FROM Data_Guru WHERE gu_alamat = ‘Bogor’ NOT gu_matpel = ‘Kimia’<br>C.	SELECT * FROM Data_Guru WHERE gu_alamat = ‘Bogor’ OR gu_matpel = ‘Kimia’<br>D.	SELECT * FROM Data_Guru WHERE gu_alamat = ‘Bogor’ AND gu_matpel = ‘Fisika’", ["A", "B", "C", "D"], "A")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

