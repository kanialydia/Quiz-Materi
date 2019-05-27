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
	gameOverHTML += "<p><a class='s-12 submit-form button background-primary text-white' href='sql-alter-record.html'>FINISH</a></p>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions materi 1
var questions = [
    new Question("Pilihlah jawaban yang menurut anda benar tentang penulisan syntax untuk mengubah isi tabel !<br><br>A.	UPDATE ‘namatabel’ SET ‘kolom1’ = ‘nilai1’ WHERE kondisi;<br>B.	UPDATE ‘namatabel’ ‘kolom1’ = ‘nilai1’ WHERE kondisi;<br>C.	UPDATE ‘namatabel’ SET ‘kolom1’ ‘nilai1’ WHERE kondisi;<br>D.	UPDATE ‘namatabel’ SET ‘kolom1’ = ‘nilai1’<br>", ["A", "B", "C", "D"], "A"),
	//new Question("Pilihlah jawaban yang menurut anda benar tentang urutan penulisan syntax untuk mengubah isi tabel !<br><br>A.	WHERE kondisi; UPDATE ‘namatabel’ SET ‘kolom1’ = ‘nilai1’ <br>B.	UPDATE ‘namatabel’ SET ‘kolom1’ = ‘nilai1’ WHERE kondisi;<br>C.	UPDATE SET ‘kolom1’ = ‘nilai1’ ‘namatabel’ WHERE kondisi;<br>D.	‘namatabel’ SET ‘kolom1’ = ‘nilai1’ WHERE kondisi; UPDATE<br>", ["A", "B", "C", "D"], "B"),
	new Question("Apa saja yang bisa anda lakukan dengan syntax update?<br><br>A.	Mengubah isi atau nilai dari tabel<br>B.	Menghapus isi atau nilai dari tabel<br>C.	Menambah isi atau nilai dari tabel<br>D.	Melihat isi dari tabel<br>", ["A", "B", "C", "D"], "A"),
	new Question("Ubah harga barang dengan kode P2 menjadi 1.5 kali dari harga lama !<br><br>A.	UPDATE ‘Barang’ Set’ harga’=1.5*harga Where kode_brg=’P2’<br>B.	Replace Barang Set harga=1.5*harga Where kode_brg=’P2’<br>C.	Replace Barang Where kode_brg=’P2’ Set harga=1.5*harga<br>D.	UPDATE ‘Barang’ Set ‘harga’=1.5*harga Where kode_brg=’P2’ <br>", ["A", "B", "C", "D"], "D"),
	//new Question("Ubah warna untuk kode_brg P4 dengan warna biru dan harganya dinaikkan 5% dari harga lama !<br><br>A.	UPDATE ‘Barang’ Set ‘warna’=’Biru’ Where kode_brg=’P4’ ‘harga’=harga*0.05<br>B.	UPDATE ‘Barang’ Set ‘warna’=’Biru’ ‘harga’=harga*0.05 Where kode_brg=’P4’<br>C.	Replace Barang Set warna=’Biru’ Where kode_brg=’P4’ harga=harga*0.05<br>D.	Replace Barang Set warna=’Biru’ harga=harga*0.05 Where kode_brg=’P4’<br>", ["A", "B", "C", "D"], "B"),
	new Question("Hapuslah pada field MONITOR pada kolom nama_barang pada tabel barang!<br><br>A.	DELETE from ‘barang’ where ‘NAMA_BARANG’='MONITOR';<br>B.	DELETE from table ‘barang’ where ‘NAMA_BARANG’='MONITOR';<br>C.	DELETE on ‘barang’ where ‘NAMA_BARANG’='MONITOR';<br>D.	DELETE on table ‘barang’ where ‘NAMA_BARANG’='MONITOR';<br>", ["A", "B", "C", "D"], "A"),
	new Question("Pilihlah syntax yang benar untuk menghapus semua isi tabel dari tabel buku!<br><br>A.	DELETE from ‘buku’ <br>B.	DELETE from ‘buku’ WHERE *<br>C.	DELETE ‘buku’ *<br>D.	DELETE *<br>", ["A", "B", "C", "D"], "A"),
	//new Question("Pilihlah syntax yang benar untuk menghapus isi tabel dari tabel buku dimana harga buku 20000 !<br><br>A.	DELETE from ‘buku’ where 20000<br>B.	DELETE form ‘buku’ where ‘harga’=20000<br>C.	DELETE from buku where harga=20000<br>D.	DELETE from buku 20000<br>", ["A", "B", "C", "D"], "B"),
	//new Question("Pilihlah syntax yang benar untuk menghapus isi tabel dari tabel buku dimana pengarang adalah Dedy !<br><br>A.	DELETE from ‘buku’ where Dedy<br>B.	DELETE from buku where pengarang=Dedy<br>C.	DELETE from buku Dedy<br>D.	DELETE form ‘buku’ where ‘pengarang’=’Dedy’<br>", ["A", "B", "C", "D"], "D"),
	new Question("Apa saja yang bisa anda lakukan dengan syntax DELTE?<br><br>A.	Mengubah isi atau nilai dari tabel<br>B.	Menghapus isi atau nilai dari tabel<br>C.	Menambah isi atau nilai dari tabel<br>D.	Melihat isi dari tabel<br>", ["A", "B", "C", "D"], "B"),
	new Question("Query untuk menampilkan nilai minimum quantity<br><br>A.	SELECT MIN(Quantity FROM Purchase WHERE Product = ‘Bagel’<br>B.	SELECT MIN(Quantity)FROM Purchase<br>C.	SELECT MIN(Price)FROM Purchase<br>D. SEMUA SALAH<br>", ["A", "B", "C", "D"], "B"),
	new Question("Query yang  benar untuk menghitung total harga dari produk Bagel adalah<br><br>A.	SELECT SUM(Price * Quality)FROM Purchase WHERE Product = ‘Bagel’<br>B.	SELECT SUM(Price)FROM Purchase WHERE Product = ‘Bagel’<br>C.	SELECT SUM(Quality)FROM Purchase WHERE Product = ‘Bagel’<br>D. SEMUA SALAH<br>", ["A", "B", "C", "D"], "A"),
	new Question("Menghitung rata-rata harga<br><br>A.	SELECT AVG(Price)FROM Purchase<br>B.	SELECT SUM(Price)FROM Purchase<br>C.	SELECT AVG(Quantity)FROM Purchase<br>D. SEMUA SALAH<br>", ["A", "B", "C", "D"], "A"),
	new Question("Menampilkan nilai maksimum quantity dari produk banana<br><br>A.	SELECT MAX(Quantity)FROM Purchase<br>B.	SELECT MAX(Price)FROM Purchase<br>C.	SELECT MAX(Quantity)FROM Purchase WHERE Product = ‘Banana’<br>D. SEMUA SALAH<br>", ["A", "B", "C", "D"], "C")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





