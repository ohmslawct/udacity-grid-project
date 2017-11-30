// Udacity Grid Project - Bruce Seymour - 29 November 2017

function makeGrid() {
  $('#submit_button').on('click', function() {
    const colorValue = $('#colorPicker').val();
    const gridWidth = $('#input_width').val(),  gridHeight = $('#input_height').val();
    const targetTable = $('#pixel_canvas');

    // remove a table if one exits already
    if ($('tr')) {
      $('tr').remove();
    }

    // if no table exists, then create it
    for (let i = 0; i < gridHeight; i++) {
      targetTable.append(function() {
        let newSection = '<tr>';
        for (let j = 0; j < gridWidth; j++) {
          newSection += `<td id=${i}x${j}></td>`;
        }
        newSection += '</tr>';
        return newSection;
      });
    }

    // click to fill in grid
    $('td').on('click', function() {
      if ($(this).css('background-color') == 'rgb(0, 0, 0)')
        <!-- TODO: Enable any color of fill to be toggled on or off as currently only black toggles. -->

        {
          $(this).css('background-color', '');
        }
      else {
        $(this).css('background-color', colorValue);
      }
    });
  })
}

makeGrid();
