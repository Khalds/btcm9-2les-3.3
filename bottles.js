function generateSingleStanza(number) {
  let bootleName = 'бутылок';
  if (number.toString().substr(-1) == 1 && number !== 11) {
    return bootleName = 'бутылка';
  } else if (number >= 5 && number <= 20) {
    return bootleName = 'бутылок'
  } else if (number.toString().substr(-1) == 2 || number.toString().substr(-1) == 3 || number.toString().substr(-1) == 4) {
    return bootleName = 'бутылки';
  }
  return bootleName
}

function generateSongText(num) {
  let botText = '';
  for (let i = num; i >= 1; i--) {
    if (i >= 2) {
      console.log(botText = `${i} ${generateSingleStanza(i)} пива на стене, ${i} ${generateSingleStanza(i)} пива! 
    Возьми одну, пусти по кругу, ${i-1} ${generateSingleStanza(i-1)} пива на стене!`);
    } else {
      console.log(botText = `${i} ${generateSingleStanza(i)} пива на стене, ${i} ${generateSingleStanza(i)} пива! 
    Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
    }
  }

}
generateSongText(100);