//brightness ipo calc by Mr.V
document.getElementById("btn").addEventListener("click", btnClicked);
//formula
function btnClicked() {
  console.log("hi");
  let p1 = +document.getElementById("programmed1").value;
  let p2 = +document.getElementById("programmed2").value;
  let src1 = +document.getElementById("script1").value;
  let src2 = +document.getElementById("script2").value;
  let pro = +document.getElementById("project").value;
  //process
  let grade = p2 + p1 + src1 + src2 + pro;
  //output
  document.getElementById("output").innerHTML = Math.round(grade);
}
