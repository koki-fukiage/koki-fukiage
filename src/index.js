import "./styles.css";

//追加ボタンを押したら関数を実行
const onClickAdd = () => {
  //テキストボックスの値を取得し削除する
  //ボタンを押したか確認
  // alert();
  // inputTextに入力された情報（値＝value）を入れる（格納する）
  const inputText = document.getElementById("add-text").value;
  //追加ボタンを押したらテキストを消す
  document.getElementById("add-text").value = "";

  //ここからDOM操作
  //div作成（listを追加していく作業）

  //divタグを追加
  const div = document.createElement("div");

  //div変数にクラスを付与
  //divにクラスをつける場合、classNameプロパティーを使う
  div.className = "list-low";

  // alert(inputText);
  //divの配下にliを作成
  const li = document.createElement("li");

  //liタグの中に要素を格納したい場合はinnerTextプロパティを使う
  //inputタグに入った値を入力する
  li.innerText = inputText;

  // divタグの下に子要素を設置する場合
  //appendChildプロパティを使用する
  div.appendChild(li);

  //ulの下にdivを設置する
  //ドットの意味は〜に〜する意味をもつ
  document.getElementById("incomplete-list").appendChild(div);
};

// クリックイベントを付与する
// add-button・IDに対して、addEventListener(何の？イベントを監視する)で
// click（何の？）のイベントに対してonClickAdd関数を引き渡す
//　アロー関数・・・・実行する処理は〇〇
document
  .getElementById("add-button") //IDをとってくる
  .addEventListener("click", () => onClickAdd()); //クリックイベントが起こったか確認

//TODOに入力された情報を変数にして引き渡す
// TODOにID必要
