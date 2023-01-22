function setup() {
  createCanvas(900, 900);
  id = 10, r = sqrt(40/id);
  //id = 10, r = 0.025;
  // 10일 때는 0.25가 보기 좋았는데..
  count = new Array(id)
  for(let i = 0; i < count.length; i++) count[i] = new Array(id);
  for(let i = 0; i < id; i++) for(let j = 0; j < id; j++) count[i][j] = 0;
}

function draw() {
  clear()
  for(let i = 0; i < id; i++) for(let j = 0; j < id; j++){
    noStroke();
    if(count[i][j] > 0) count[i][j]--;
    fill(count[i][j]);
    rect(i*(900/id)+r, j*(900/id)+r, 900/id-2*r, 900/id-2*r, 3*r);
  }
  count[parseInt(mouseX/(900/id))][parseInt(mouseY/(900/id))] = min(255, count[parseInt(mouseX/(900/id))][parseInt(mouseY/(900/id))] + 50);
}
