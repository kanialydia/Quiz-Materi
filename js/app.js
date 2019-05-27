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
    gameOverHTML += "<h2 id='score'> Correct Answer: " + quiz.score + " From 8 Question</h2>";
	gameOverHTML += "<h1 id='score'> " + quiz.score * 12.5+"</h2><br><br>";
	gameOverHTML += "<p><a class='s-12 submit-form button background-primary text-white' href='sql-database.html'>FINISH</a></p>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions materi 1
var questions = [
    new Question("Apa itu Database?<br><br>A. Kumpulan data yang disimpan secara sistematis di dalam komputer yang dapat diolah atau dimanipulasi menggunakan perangkat lunak (program aplikasi) untuk menghasilkan informasi<br>B. Kumpulan data yang dapat diolah oleh semua orang demi kepentingan masing-masing<br>C. Kumpulan data yang didalamnya terdapat kumpulan data yang tidak terbatas<br>D. tidak ada yang benar", ["A", "B","C","D"], "A"),
    new Question("...... DATABASE “BasisData”<br>Untuk membuat database BasisData, maka titik-titik query di atas sebaiknya diisi dengan....?", ["MAKE", "CRATE", "CREATE", "MAKES"], "CRATE"),
    new Question("...... DATABASE “BasisData”<br>Untuk menghapus database BasisData, maka titik-titik di query di atas sebaiknya diisi dengan....?", ["DELETE", "KILL","DROP", "DRAG"], "DROP"),
    new Question("<img src='img/tabel1.jpg' alt=''><br>Yang dilingkari merah dan hijau pada tabel mahasiswa di atas adalah?", ["Record dan Judul", "Rekor dan Atribut", "Atribut dan Isi", "Atribut dan Record"], "Atribut dan Record"),
    new Question("Apa itu Primary key?<br><br>A. Kunci utama dari sebuah tabel<br>B. Atribut utama yang harus ada di setiap tabel<br>C. Atribut tabel yang nilainya harus unik<br>D. Atribut tabel pertama", ["A", "B", "C", "D"], "C"),
	new Question("Apa itu Foreign key?<br><br>A. . Atribut asing yang berasal dari database lain<br>B. Atribut pada sebuah tabel yang merujuk ke atribut di tabel lain<br>C. Atribut tabel yang memiliki nama yang sama dengan atribut di tabel lain<br>D. Atribut yang menggunakan bahasa asing ", ["A", "B", "C", "D"], "B"),
	new Question("<img src='img/qa1.jpg' alt=''><br>Untuk membuat tabel pegawai dengan atribut primary key NIP,  Nama, Kota tinggal, dan foreign key manager yang merujuk pada atribut NIP dari tabel manajer maka yang cocok untuk mengisi titik-titik diatas adalah?<br><br>A. <img src='img/aq1a.jpg' alt=''><br>B. <img src='img/aq1b.jpg' alt=''><br>C. <img src='img/aq1c.jpg' alt=''><br>D. <img src='img/aq1d.jpg' alt=''>", ["A", "B", "C", "D"], "C"),
	new Question("Query manakah yang seharusnya dijalankan untuk menghapus primary key NIM pada tabel mahasiswa??<br><br>A.DROP mahasiswa ALTER TABLE NIM<br>B. ALTER TABLE mahasiswa DROP PRIMARY KEY NIM<br>C. ALTER PRIMARY KEY mahasiswa DROP NIM<br>D. ALTER TABLE mahasiswa DROP PRIMARY KEY", ["A", "B", "C", "D"], "D")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





