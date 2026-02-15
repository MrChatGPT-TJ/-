function calculateTiles() {
  let floorLength = parseFloat(document.getElementById("floorLength").value);
  let floorWidth = parseFloat(document.getElementById("floorWidth").value);

  let tileLength = parseFloat(document.getElementById("tileLength").value) / 100;
  let tileWidth = parseFloat(document.getElementById("tileWidth").value) / 100;

  let reserveChecked = document.getElementById("reserve").checked;

  if (floorLength <= 0 || floorWidth <= 0 || tileLength <= 0 || tileWidth <= 0) {
    document.getElementById("result").innerHTML = "❌ Введите правильные значения!";
    return;
  }

  let floorArea = floorLength * floorWidth;
  let tileArea = tileLength * tileWidth;

  let tilesNeeded = Math.ceil(floorArea / tileArea);

  let tilesFinal = tilesNeeded;

  if (reserveChecked) {
    tilesFinal = Math.ceil(tilesNeeded * 1.10);
  }

  document.getElementById("result").innerHTML = 
    `<b>📏 Площадь пола:</b> ${floorArea.toFixed(2)} м² <br>
    <b>🧱 Площадь плитки:</b> ${tileArea.toFixed(3)} м² <br><br>

    <b>✅ Плиток без запаса:</b> ${tilesNeeded} шт <br>
    <b>🔥 Итоговое количество:</b> ${tilesFinal} шт
  `;
}

calculateTiles();