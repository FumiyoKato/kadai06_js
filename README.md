## ①課題番号-プロダクト名
(仮称)太陽光発電出力予測値の自販機

## ②課題内容（どんな作品か）
- 太陽光発電量予測値を安価で調達したいリソースアグリゲーター事業者や再エネを活用したスマートコミュニティ実証事業主体がターゲット
- 重い契約手続き作業を踏むことなく、web操作で気軽に予測値サブスクを申し込むことができる
- 当プロダクトは、サブスク申し込みと、予測対象の太陽光発電設備のスペックを入力するための手段
- 申込みページでアカウントを作成後、弊社HPに連携予定の決済プラットフォームへ遷移し、サブスク申込み完了へと動線設定を想定
- アカウント作成後は、事業者それぞれに『太陽光発電出力予測設定&管理ページ』を持たせ、予測対象の太陽光発電設備のスペックを入力＆Firebaseで保存
- 太陽光発電出力予測設定&管理ページに入力された予測対象の太陽光発電設備のスペック情報は、予測パラメータとして、別途予測演算Pythonモジュールへ渡され、毎日定時に時間起動で予測値出力し、契約者へ送信する（送信方法はこれから検討）

## ③DEMO
- https://fumiyokato.github.io/kadai06_js/

## ④作ったアプリケーション用のIDまたはPasswordがある場合
- ID: user
- PW: password

## ⑤工夫した点・こだわった点
- 現時点で想定している画面遷移を具現化

## ⑥難しかった点・次回トライしたいこと(又は機能)
- 契約者それぞれにマイページを充てがう方法が難しそう
- 今回はデモとして、１ユーザーのみを想定し作成してみた

## ⑦次回ミニ講義で聞きたいこと
- これまで習ったことが整理できてないので、総浚いダイジェスト版を聴講できれば！

## ⑧フリー項目（感想、シェアしたいこと等なんでも）
- 未だに、htmlとcssが思い通りに書けず、jsに至るまでに大量の時間を溶かしてしまうのがツライ
- 一度改めて、これまで習ってきたことをゆっくり復習して、腹落ち＆定着させる時間が欲しい