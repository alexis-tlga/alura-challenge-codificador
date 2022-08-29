const input = document.getElementById('text-input');
const output = document.getElementById('text-output');
const initialOutput = document.getElementById('initial-output');
const resultOutput = document.getElementById('result-output');


const characterMap = {
	'e': 'enter',
	'i': 'imes',
	'a': 'ai',
	'o': 'ober',
	'u': 'ufat',
}


function encode(text) {
	for (let key in characterMap) {
		text = text.replaceAll(key, characterMap[key]);
	}
	return text;
}

function decode(text) {
	reverseKeys = Object.keys(characterMap).reverse();
	for (let key of reverseKeys) {
		text = text.replaceAll(characterMap[key], key);
	}
	return text;
}

function encodeButtonEvent() {
	const text = input.value.toLowerCase();
	const encodedText = encode(text);
	if (initialOutput.style.display !== 'none') {
		initialOutput.style.display = 'none';
	}
	if (resultOutput.style.display === 'none') {
		resultOutput.style.display = 'block';
	}
	output.innerHTML = encodedText;
}

function decodeButtonEvent() {
	const text = input.value.toLowerCase();
	const decodedText = decode(text);
	if (initialOutput.style.display !== 'none') {
		initialOutput.style.display = 'none';
	}
	if (resultOutput.style.display === 'none') {
		resultOutput.style.display = 'block';
	}
	output.innerHTML = decodedText;
}

function forceLowerCase(event) {
	input.value = input.value.toLowerCase();
}
