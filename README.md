フォーム内のプルダウンメニューの選択項目を変更する度に、セレクトボックスの背景色を変える方法です。
<!--more-->

<h3>デモ</h3>

<a href="http://klutche.github.io/colorfulSelect/" target="_blank" class="link">サンプル</a>

IEでは選択中のセレクトボックスは青背景になるので少しわかり辛いかもしれません。

<h3>HTML</h3>

[html]
<select class="clorfulSelect">
<option value="">選択してください</option>
<option value="red">赤</option>
<option value="blue">青</option>
<option value="green">緑</option>
<option value="gray">灰</option>
<option value="black">黒</option>
</select>
[/html]

select 要素に class「clorfulSelect」を設定します。

<h3>Javascript</h3>

jQuery 依存なので、まず jQuery を読み込み、その下にスクリプトを書きます。
HTML の head 内に以下のように記載してください。

[html]
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	$('.clorfulSelect').bind('change', function(){
		$(this).removeClass();
		$(this).addClass($(this).val());
	});
});
</script>
[/html]

<h3>しくみ</h3>

Javascript 部分の処理の説明です。

[javascript]
$('.clorfulSelect').bind('change', function(){
[/javascript]

class「clorfulSelect」が設定されたセレクトボックスの値が変更された場合に、function() 以下を実行する。

[javascript]
$(this).removeClass();
[/javascript]

まず、セレクトボックスの class を削除します。

[javascript]
$(this).addClass($(this).val());
[/javascript]

選択された項目の value の値を class としてセレクトボックスに付加します。

<h3>デモ</h3>

<a href="http://klutche.github.io/colorfulSelect/" target="_blank" class="link">サンプル</a>
