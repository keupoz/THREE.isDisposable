var $header = document.querySelector('#header'),
    $result = document.querySelector('#result'),
    $message = document.querySelector('#message'),
    $name = document.querySelector('#name');

$name.addEventListener('input', function () {
	let name = this.value.replace(/\s+/g, '');
	
	if (THREE[name] == undefined) {
		$message.innerText = 'Nothing found';
		$result.innerText = 'undefined';
	} else if (typeof THREE[name] == 'function') {
		$message.innerText = 'Everything is ok!';
		$result.innerText = typeof THREE[name].prototype.dispose == 'function';
	} else {
		$message.innerText = name + ' isn\'t a constructor';
		$result.innerText = 'undefined';
	}
});

$header.setAttribute('data-revision', THREE.REVISION);
$result.innerText = 'undefined';
$message.innerText = 'Enter constructor name below';