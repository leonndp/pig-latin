const textInput = document.querySelector('.textbox--input');
const title = document.querySelector('.title');
const textOutput = document.querySelector('.textbox--output');

const translateText = (text) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const puncts = '.!?,:;/'.split('');
	const spaceFilter = text.replace(/ +(?= )/g,'')


	const result = spaceFilter.split(' ').map(word => {
		const lastChar = word[word.length - 1]

		if(word === "") {
			return "";
		}
		for(i=0;i<word.length;i++){
			if (vowels.includes(word[i])) {
				break
			}
		}

		if(puncts.includes(lastChar)) {
			return (i === 0) ? word.substr(0, word.length - 1) + 'yay' + lastChar : word.toLowerCase().substr(i, word.length).replace(lastChar,'') + word.toLowerCase().substr(0,i) + 'ay' + lastChar;
			// return (i === 0) ? `${word.substr(0, word.length - 1)}yay${lastChar}` : `${word.toLowerCase().substr(i, word.length - 1)}${word.toLowerCase().substr(0,i)}ay${lastChar}`
		} else {
			return (i === 0) ? word + 'yay' : word.toLowerCase().substr(i) + word.toLowerCase().substr(0,i) + 'ay';
		}
		
	}).join(' ')

	return result;
}

const displayText = (e) => {
	e.preventDefault();
	const text = textInput.value;
	textOutput.textContent = translateText(text);
}

const randomHeader = (e) => {
	const headers = ["Tryay anslatingtray omethingsay.", "Elcomeway!", "Othingnay etterbay otay oday?", "Areyay ouyay atedhydray?"]
	const randomText = Math.floor(Math.random() * headers.length);
	title.textContent = headers[randomText];
}

textInput.addEventListener('input', displayText);
window.addEventListener('load', randomHeader);