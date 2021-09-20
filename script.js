 // hjelpevariabel for både view og controller
 var contentDiv = document.getElementById('content');
  
 // model
 let numbers = [7, 3, 1, 5, 8];
 let chosenBar; // Variabel for hvilken stolpe som er valgt
 let inputValue; // Variabel for hva som er skrevet i input-feltet
 let enableDisableButtons = 'disabled';
 
  // view
  show();
  function show() {
      let svgInnerHtml = '';
      for (let i = 0; i < numbers.length; i++) {
          svgInnerHtml += createBar(numbers[i], i + 1);
      }
      contentDiv.innerHTML = `
          <svg id="chart" width="600" viewBox="0 0 102 102">
              ${svgInnerHtml}
          </svg><br/>
          Valgt stolpe: <i>${chosenBar == undefined ? 'ingen' :`${chosenBar}` }</i>
          <br />
          Verdi:
          <input type="number" min="1" max="10" oninput="inputValue = this.value"/>
          <button onclick='leggTilStolpe()'>Legg til stolpe</button>
          <button ${enableDisableButtons} onclick='endreStolpe()'>Endre valgt stolpe</button>
          <button ${enableDisableButtons} onclick='fjerneStolpe()'>Fjerne valgt stolpe</button>
          `;
  }

  function createBar(number, barNo) {
    let cssKlasse = '';
      const width = 8;
      const spacing = 2;
      let x = (barNo - 1) * (width + spacing)+1;
      let height = number * 10;
      let y = 101 - height;
      let color = calcColor(1, 10, barNo);
      if (barNo == chosenBar) { 
        cssKlasse = 'valgt';
      }
      return `<rect class='${cssKlasse}' onclick="velgStolpe(${barNo})" width="${width}" height="${height}"
                          x="${x}" y="${y}" fill="${color}"></rect>`;
  }

  function calcColor(min, max, val) {
    var minHue = 250, maxHue = -70;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
  }

//controller
