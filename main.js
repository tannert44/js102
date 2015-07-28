function runSortOnArray(arr){
  return arr.sort(function(a, b){
    return a-b;
  })
}

function higherValue(sortedArr){
  var newArr = $.grep(sortedArr, function(n, i){
    return n>25;
  });
  return runSortOnArray(newArr);
}

function convertStringToArray(string){
  return string.split(",");
}

$('button').on("click", function(){
  var userInput = $('input').val();
  var userArray = convertStringToArray(userInput);
  var higherNumbers = higherValue(userArray);
  var finalArray = runSortOnArray(higherNumbers);
  $.each(finalArray, function(index, value){
    var output = "<div class='number'>" + value + "</div>"
    $('body').append(output);
  })
  $('.number:even').css("color", "red");
  $('.number:odd').css("color", "blue");
});