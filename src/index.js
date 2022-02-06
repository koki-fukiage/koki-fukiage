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
  createIncompletelist(inputText);
};

// クリックイベントを付与する
// add-button・IDに対して、addEventListener(何の？イベントを監視する)で
// click（何の？）のイベントに対してonClickAdd関数を引き渡す
//　アロー関数・・・・実行する処理は〇〇
document
  .getElementById("add-button") //IDをとってくる
  .addEventListener("click", () => onClickAdd()); //クリックイベントが起こったか確認

//deleteTargetが被っているので関数化、未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompletelist = (text) => {
  //ここからDOM操作
  //div作成（listを追加していく作業）

  //divタグを追加
  const div = document.createElement("div");
  //div変数にクラスを付与
  //divにクラスをつける場合、classNameプロパティーを使う
  div.className = "list-row";

  // alert(inputText);
  //divの配下にliを作成
  const li = document.createElement("li");
  //liタグの中に要素を格納したい場合はinnerTextプロパティを使う
  //inputタグに入った値を入力する
  li.innerText = text;

  // divタグの下に子要素を設置する場合
  // appendChildプロパティを使用する
  // div.appendChild(li);

  //ulの下にdivを設置する
  //ボタンタグ（完了）も追加する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //イベントを生成
  //completeButtonをクリックしたときに関数を実行する枠組み
  completeButton.addEventListener("click", () => {
    // alert("完了");
    deleteFromIncompleteList(completeButton.parentNode);
    //完了ボタンを押したら親からlistを消すparentNode=親要素を指定する
    // const deleteTarget = completeButton.parentNode;
    // // console.log(deletecomplete);
    // document.getElementById("imcomplete-list").removeChild(deleteTarget);
    //完了リストに要素を追加する
    const addTarget = completeButton.parentNode;
    //firstElementChildで一番最初の子要素を取得しinnerTextを取得する
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // alert("戻す");
      //戻すボタンが押されると戻すボタンの親タグ削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const Text = backButton.parentNode.firstElementChild.innerText;
      createIncompletelist(Text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //ボタンタグ（削除）も追加する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //クリックしたときに関数を実行する枠組み
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    //　　削除をクリックしたら親タグ(div=list-row)未完了リストから削除する
    // deleteTarget変数はdeleteButtonの親の要素を取得(parentNode)する
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // // removeChildでdeleteTargetを消す
    // document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //戻るボタンを追加する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //ドットの意味は〜に〜する意味をもつ
  document.getElementById("imcomplete-list").appendChild(div);
};

//TODOに入力された情報を変数にして引き渡す
// TODOにID必要
