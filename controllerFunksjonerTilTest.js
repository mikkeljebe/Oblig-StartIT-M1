function velgStolpe(x){
  chosenBar == x ? chosenBar = undefined : chosenBar = x;
  chosenBar == undefined 
  ? enableDisableButtons = 'disabled' 
  : enableDisableButtons = '';
  show()
  }

  function endreStolpe() {
    inputValue > 10 || inputValue < 1 || inputValue == undefined 
    ? inputValue = 'hvisFeilTekst'
    : numbers[chosenBar-1] = parseInt(inputValue);
    show();
  }
  
  function fjerneStolpe(){
    numbers.splice((chosenBar-1), 1);
    chosenBar = undefined;
    show();
  }
  
  function leggTilStolpe(){
    inputValue > 10 || inputValue == undefined || inputValue < 1 
    ? inputValue = 'hvisFeilTekst'
    : numbers.push(parseInt(inputValue));
    show();
  }