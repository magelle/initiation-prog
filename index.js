/* ***********************************************************
 * Display methods DO NOT MODIFY IT !!
 * ***********************************************************/
import './style.css';

function draw(toDraw) {
    document
        .getElementById('game-board')
        .innerHTML = toDraw;
}

var aliveCell = '<td class="alive">&nbsp;</td>';
var deadCell = '<td class="dead">&nbsp;</td>';

function table(lines) {
    return '<table>' + lines.join('') + '</table>';
}

function line(cells) {
    return '<tr>' + cells.join('') + '</tr>';
}

function cell(state) {
    return state ? aliveCell : deadCell;
}

function display(grid) {
    draw(
        table(
            grid.map(
                l => line(l.map(c => cell(c)))
            )
        )
    )
}

/* *********************************************************
 * Here you can work :)
 * *********************************************************/

function nextGen(grid) {
  return grid;
}

function loop(grid) {
  console.log('Next gen');
  var grid = nextGen(grid);
  display(grid);
  setTimeout(() => loop(grid), 1000)
}

var initialtState = [
  [false, true, false],
  [false, true, false],
  [false, true, false]
];

loop(initialtState);