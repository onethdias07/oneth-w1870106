<script>
  function display() {
    if (document.getElementById('answer-1').checked) {
      let question1 = 0;
      question1 += 1;
      document.getElementById("p").innerHTML = "it works";

    } else if (document.getElementsById('incorrect')[0].checked)  {
      let question2 = 0;
      question2 += 1;
      document.getElementById("p").innerHTML = "incorrect";

    } else {
      document.getElementById("p").innerHTML = "No one selected";
    }
 }
</script>
let mark = 0;
// incorrect options
if (document.getElementsByClassName('incorrect')[0].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[1].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[2].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[3].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[4].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[5].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[6].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[7].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[8].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[9].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[10].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[11].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[12].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[13].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[14].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[15].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[16].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[17].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[18].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementsByClassName('incorrect')[19].checked) {
  mark += -1;
  document.getElementById("p").innerHTML = mark;

}


let mark2 = 0;
if (document.getElementsByClassName("answer")[0].checked) {
  mark2 += 2;
  document.getElementById("p").innerHTML = mark2;

}
if (document.getElementById('answer-2').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-3').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-4').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-5').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-6').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-7').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-8').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-9').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
if (document.getElementById('answer-10').checked) {
  mark += 2;
  document.getElementById("p").innerHTML = mark;

}
else {
  document.getElementById("p").innerHTML = "No answers selected";
}
