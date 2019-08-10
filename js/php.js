// Начало PHP
var php1 = {
	"<h1>Объяление переменных</h1>":"<p>$ <- Знак доллара вначале каждой переменной</p>",
	"<h1>Конкатенация строк</h1>":"<p>$a = \"Первая строка\".\"вторая строка\";</p>",
	"<h1>Вывод в документ строки</h1>":"<p>\
 echo \'Чисто строка\';</p>\
 <p>echo \"Строка с переменной $a\";</p>\
 <p>echo $a;</p>\
 <p>echo $a+$b;\
	</p>",
	"<h1>Вывод в документ структуры</h1>":
	"<p>\print_r(значение);</p>\
	<p>var_dump(значение);</p>",
	"<h1>Передача параметра в функцию по ссылке</h1>":"<p>function get(&$a){  $a*=$a; }</p>",
	"<h1>Подключение внешних файлов</h1>":"\
	<h4>include \"file.php\";</h4>\
	<p>подключение файла в код</p>\
	<h4>include_once \"file.php\";</h4>\
	<p>подключение файла в код один раз</p>\
	<h4>require \"file.php\";</h4>\
	<p>если файл не подключился, то программа не сработает</p>\
	<h4>require_once \"file.php\";</h4>\
	<p>подключение единожды</p>\
	",
	"<h1>Объявление массива</h1>":"<p>\
	$m = array('one'=>1, 'two'=> 2);</p>\
	<p>$m[0] = 'one';</p>\
	<p>$m[10] = 'two';\
	</p>",
	"<h1>Обращение к элементу массива</h1>":"<p>\
	$a = $m['key'];</p>\
	<p>$b = $m[0];\
	</p>",
	"<h1>Перебор массива</h1>":"<p>foreach($m as $key => $value){}</p>",
	"<h1>Проверить, массив ли это</h1>":"<h4>is_array($m);</h4><p>true - если это массив</p>",
	"<h1>Получить колличество элементов массива</h1>":"<h4>count($m) или sizeof($m)</h4> <p>возвращает кол-во элементов</p>",
	"<h1>Перемешать элементы массива случайным образом</h1>":"<h4>shuffle($m); </h4><p> перемешать элементы</p>",
	"<h1>Создать из набора переменных ассоциативный массив, где ключами будут сами имена переменных</h1>":"<h4>compact('model', 'producer', 'year');</h4> <p>указываем переменные без $</p>",
	"<h1>Сортировка по значениям</h1>":"<h4>asort($m);</h4><p>сортировка по возрастанию</p><h4>arsort($m);</h4><p>сортировка по убыванию</p>",
	"<h1>Сортировка по ключам</h1>":"<h4>ksort($m);</h4><p>сортировка по возрастанию</p><h4>krsort($m);</h4><p>сортировка по убыванию</p>",
	"<h1>Естественная сортировка</h1>":"<h4>natsort($m);</h4><p>сортирует, учитывая числа и регистр</p><h4>natcasesort($m);</h4><p>сортирует, учитывая числа, но забивая на регистр</p>",
	"<h1>Получить данные из GET/POST запроса</h1>":"<h5>$_GET['значение, указанное в name инпута']</h5><h5>$_POST['значение, указанное в name инпута']</h5>",
	"<h1>Проверить переменную на существование и наличие значения</h1>":"<h4>isset($_POST['login']);</h4><p>true, если существует и не undef</p>",
	"<h1>Как выглядит строка GET запроса</h1>":"<h4>http://localhost:8080/get.php ? login=mailcom &age=22</h4><p>Адрес файла + ? + парметры через &</p>",
	"<h1>Найти первую позицию вхождения подстроки</h1>":"<h4>$p = strpos($a, $b);</h4><p>возвращает первую позицию строки $a в строке $b</p><h4>mb_strpos()</h4><p>если не отображается кириллица</p>",
	"<h1>Найти последнюю позицию вхождения подстроки</h1>":"<h4>$p = strrpos($a, $b);</h4><p>возвращает последнюю позицию строки $a в строке $b</p><h4>mb_strrpos()</h4><p>если не отображается кириллица</p>",
	"<h1>Удалить начальные и конечные пробелы в строке</h1>":"<h4>$s = trim($a);</h4><p>удалит начальные и конечные пробелы, а также управляющие символы '\\n', '\\r', '\\t'</p>",
	"<h1>Перевод строки в нижний регистр</h1>":"<h4>$s = strtolower($a);</h4><p>переводит строку в нижний регистр</p><h4>mb_strtolower()</h4><p>если не отображается кириллица</p>",
	"<h1>Перевод строки в верхний регистр</h1>":"<h4>$s = strtoupper($a);</h4><p>переводит строку в верхний регистр</p><h4>mb_strtoupper()</h4><p>если не отображается кириллица</p>",
	"<h1>Длина строки</h1>":"<h4>$s = strlen($a);</h4><p>получение количества символов в строке</p><h4>mb_strlen()</h4><p>если не отображается кириллица</p>",
	"<h1>Получение подстроки</h1>":"<h4>$s = substr($str, $start [, $length]);</h4><p>получение подстроки</p><h4>mb_substr()</h4><p>если не отображается кириллица</p>",
	"<h1>Замена подстроки</h1>":"<h4>$s = str_replace($old, $new, $string);</h4><p>меняет все $old на $new в $string</p>",
	"<h1>Сохранение Cookie</h1>":"<h4>setcookie(</h4><p>string $name,<br> string $value,<br> int $expire,<br> string $path,<br> string $domain,<br> bool $secure,<br> bool $httponly)</p>"
};