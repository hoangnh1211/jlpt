const db = require('./../Database')
const util = require('util');

var queryFunc = util.promisify(db.query).bind(db);

const levels = ['N1', 'N2', 'N3', 'N4', 'N5'];
const types = ['vocabulary', 'grammar', 'kanji']

let datakotoba = [
    {
        "question": "きのう　かいしゃを　*やすみました*",
        "answer1": "友みました",
        "answer2": "休みました",
        "answer3": "安みました",
        "answer4": "体みました",
        "result": "2"
    },
    {
        "question": "*せんせい*は　いつも　いそがしいです。",
        "answer1": "先生",
        "answer2": "生先",
        "answer3": "先牛",
        "answer4": "矢王",
        "result": "1"
    },
    {
        "question": "いすの*した*に　かばんが　あります。",
        "answer1": "才",
        "answer2": "丅",
        "answer3": "下",
        "answer4": "干",
        "result": "3"
    },
    {
        "question": "けさ　おそく　うちを　*出ました*",
        "answer1": "だしました",
        "answer2": "でました",
        "answer3": "でりました",
        "answer4": "きました",
        "result": "2"
    },
    {
        "question": "この　かばんは　*高い*です",
        "answer1": "たかい",
        "answer2": "だかい",
        "answer3": "たがい",
        "answer4": "だがい",
        "result": "1"
    },
    {
        "question": "けさ　おそく　うちを　*出ました*",
        "answer1": "だしました",
        "answer2": "でました",
        "answer3": "でりました",
        "answer4": "きました",
        "result": "2"
    },
    {
        "question": "アンさんは　ぼうしを　（　　）　います。",
        "answer1": "きて",
        "answer2": "はいて",
        "answer3": "かけて",
        "answer4": "かぶって",
        "result": "4"
    },
    {
        "question": "（　　）　のみものが　ほしいです　。",
        "answer1": "いたい",
        "answer2": "つめたい",
        "answer3": "あかるい",
        "answer4": "さむい",
        "result": "2"
    },
    {
        "question": "ふくを　（　　）、　おふろに　はいります。",
        "answer1": "すって",
        "answer2": "すわって",
        "answer3": "けして",
        "answer4": "ぬいで",
        "result": "4"
    },
    {
        "question": "*わたしは　フランスごを　ならっています*。",
        "answer1": "わたしは　フランスごを　おしえて　います。",
        "answer2": "わたしは　フランスごを　かいて　います。",
        "answer3": "わたしは　フランスごを　べんきょうして　います。",
        "answer4": "わたしは　フランスごを　よんで　います。",
        "result": "3"
    },
    {
        "question": "*わたしは　はじめて　にほんに　きました*。",
        "answer1": "わたしは　にほんに　きたことが　ありませんでした。",
        "answer2": "わたしは　ことし　にほんに　きました。",
        "answer3": "わたしは　らいねん　にほんに　きます。",
        "answer4": "わたしは　にほんに　きたかったです。",
        "result": "1"
    },
    {
        "question": "*たなかさんは　もう　かえりました*。",
        "answer1": "たなかさんは　きのう　きました。",
        "answer2": "たなかさんは　どこも　いません。",
        "answer3": "たなかさんは　ここに　いません。",
        "answer4": "たなかさんは　きょう　やすみでした。",
        "result": "1"
    }
]
const add =async (type, level,questions) => {
    var qr = "INSERT INTO " + type + "practice(`id`, `level`) VALUES (NULL, \'" + level + "\')";
    var practiceRow = await queryFunc(qr);
    if (practiceRow) {
        var idRLG = practiceRow.insertId;
        var rs = adddata(idRLG, type,questions);
    }
 
}
function adddata(idRLG, type,questions) {
    var qs = questions;
    var row = 0;
    while (qs[row]) {
        var questions = qs[row];
        qr = "INSERT INTO questionpractice" + type + " (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `result`, `idRLG`)" +
            "VALUES (NULL, \'" + questions.question + "\'," +
            "\'" + questions.answer1 + "\'," +
            "\'" + questions.answer2 + "\'," +
            "\'" + questions.answer3 + "\'," +
            "\'" + questions.answer4 + "\'," +
            "\'" + questions.result + "\'," +
            "\'" + idRLG + "\'" +
            ")";
        var result = queryFunc(qr);
        row++;
    }
    return { status: "ok", message: "success" };
}
add('vocabulary','N5',datakotoba)
