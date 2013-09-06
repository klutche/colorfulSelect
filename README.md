# 選択した項目によってセレクトボックスの色を変える方法

フォーム内のプルダウンメニューの選択項目を変更する度に、セレクトボックスの背景色を変える方法です。

## デモ

`<a href="http://klutche.github.io/colorfulSelect/" target="_blank" class="link">サンプル</a>`

IEでは選択中のセレクトボックスは青背景になるので少しわかり辛いかもしれません。

## HTML

	<select class="clorfulSelect">
	<option value="">選択してください</option>
	<option value="red">赤</option>
	<option value="blue">青</option>
	<option value="green">緑</option>
	<option value="gray">灰</option>
	<option value="black">黒</option>
	</select>

select 要素に class「clorfulSelect」を設定します。

## Javascript

jQuery 依存なので、まず jQuery を読み込み、その下にスクリプトを書きます。
HTML の head 内に以下のように記載してください。

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript">
	$(function(){
		$('.clorfulSelect').bind('change', function(){
			$(this).removeClass();
			$(this).addClass($(this).val());
		});
	});
	</script>

## しくみ

Javascript 部分の処理の説明です。

`$('.clorfulSelect').bind('change', function(){`

class「clorfulSelect」が設定されたセレクトボックスの値が変更された場合に、function() 以下を実行する。

`$(this).removeClass();`

まず、セレクトボックスの class を削除します。

`$(this).addClass($(this).val());`

選択された項目の value の値を class としてセレクトボックスに付加します。

## デモ

<a href="http://klutche.github.io/colorfulSelect/" target="_blank" class="link">サンプル</a>
