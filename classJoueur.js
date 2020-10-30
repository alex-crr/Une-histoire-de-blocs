class Joueur {
  constructor(x, y,) {
    this.x = x;
    this.y = y;
    this.vie = derniereVie;
    this.vitesse = 4;
    this.score = dernierScore;
    this.taille = 32;
    this.offset = (tailleCarre - this.taille) / 2
    this.matrix = [
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF"],
      ["##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "##00FFFFFF", "##00FFFFFF", "##00FFFFFF"]
    ]
    this.img = initSprite(this.matrix);
    this.mouvement = true;
  }
  //////// DEPLACEMENT + COLLISIONS MURS ////////
  bouger() {
    if (this.mouvement == true) {
      if (keyIsDown(RIGHT_ARROW) && !this.collision(this.x + 1, this.y) && !this.collisionCreature(this.x + 1, this.y)) {
        this.x += this.vitesse;
      }
      if (keyIsDown(LEFT_ARROW) && !this.collision(this.x - 1, this.y) && !this.collisionCreature(this.x - 1, this.y)) {
        this.x -= this.vitesse;
      }
      if (keyIsDown(UP_ARROW) && !this.collision(this.x, this.y - 1) && !this.collisionCreature(this.x, this.y - 1)) {
        this.y -= this.vitesse;
      }
      if (keyIsDown(DOWN_ARROW) && !this.collision(this.x, this.y + 1) && !this.collisionCreature(this.x, this.y + 1)) {
        this.y += this.vitesse;
      }
    }
    this.collisionCreature(this.x, this.y);
    this.collisionPastille(this.x, this.y);
    if (keyIsDown(82)) {
      posSpawnX = posDepartX
      posSpawnY = posDepartY
      niveau = 0;
      this.score = 0;
      this.vie = 3;
      dernierScore = this.score
      derniereVie = this.vie
      initNiveau();
    }
    this.afficher();
    this.exit();
    textSize(32);
    fill("red");
    text("vie : " + this.vie + " score: " + this.score, 30, 830);
    this.mort();
    this.changerNiveaux();
    this.victoire();
  }
  //////// AFFICHAGE DU JOUEUR ////////
  afficher() {
    //image(this.img, this.x, this.y)
    fill("red")
    rect(this.x + this.offset, this.y + this.offset, this.taille, this.taille)
  }
  //////// GESTION DES exit ////////
  // pas de sortie  
  /*exit() {
      if (this.x < 0) this.x = this.x = 0;
      if (this.y < 0) this.y = his.y = 0;
      if (this.x + tailleCarre > tailleCanvas) this.x = tailleCanvas - tailleCarre;
      if (this.y + tailleCarre > tailleCanvas) tailleCanvas - tailleCarre;
    }
  // téléportation à l'opposé
    exit() {
      if (this.x < 0) this.x = tailleCanvas - tailleCarre;
      if (this.y < 0) this.y = tailleCanvas - tailleCarre;
      if (this.x + tailleCarre > tailleCanvas) this.x = 0;
      if (this.y + tailleCarre > tailleCanvas) this.y = 0;
    }*/
  // changement de niveau
  exit() {
    let exit = false;
    if (this.x + this.taille > tailleCanvas && this.x != 10000) exit = true;
    if (this.x < 0) exit = true;
    if (this.y + this.taille > tailleCanvas && this.y != 10000) exit = true;
    if (this.y < 0) exit = true;
    return exit;
  }
  //////// COLLISIONS MURS ////////
  collision(x1, y1) {
    for (let i = 0; i < tabMur.length; i++) {
      let x2 = x1 + this.taille;
      let y2 = y1 + this.taille;
      let murX2 = tabMur[i].x + tailleCarre;
      let murY2 = tabMur[i].y + tailleCarre;
      if (x2 + this.offset > tabMur[i].x
        && x1 + this.offset < murX2
        && y2 + this.offset > tabMur[i].y
        && y1 + this.offset < murY2) {
        return true;
      }
    }
    return false;
  }
  //////// COLLISIONS CREATURES ////////
  collisionCreature(x1, y1) {
    for (var i = 0; i < tabCreature.length; i++) {
      var x2 = x1 + this.taille;
      var y2 = y1 + this.taille;
      var creatureX2 = tabCreature[i].x + tailleCarre;
      var creatureY2 = tabCreature[i].y + tailleCarre;
      if (x2 + this.offset > tabCreature[i].x
        && x1 + this.offset < creatureX2
        && y2 + this.offset > tabCreature[i].y
        && y1 + this.offset < creatureY2) {
        if (tabCreature[i].type == "hostile") {
          this.x = posSpawnX;
          this.y = posSpawnY;
          this.vie--;
          derniereVie = this.vie;
        }
        else if (tabCreature[i].type == "amical") {
        }
        else if (tabCreature[i].type == "passif") {
        }
        return true;
      }
    }
    return false
  }
  //////// COLLISIONS Pastille////////

  collisionPastille(x1, y1) {
    for (var i = 0; i < tabPastille.length; i++) {
      var x2 = x1 + tailleCarre;
      var y2 = y1 + tailleCarre;
      var pastilleX2 = tabPastille[i].x + tailleCarre;
      var pastilleY2 = tabPastille[i].y + tailleCarre;
      if (x2 - this.offset > tabPastille[i].x
        && x1 + this.offset < pastilleX2
        && y2 - this.offset > tabPastille[i].y
        && y1 + this.offset < pastilleY2) {
        if (tabPastille[i].type == "point") {
          this.score += 50;
          dernierScore = this.score;
        }
        if (tabPastille[i].type == "vie") {
          this.vie++;
          derniereVie = this.vie;
        }
        tabPastille.splice(i, 1);
      }
    }
  }

  //////// GESTION DE LA MORT ////////
  mort() {
    if (this.vie < 1) {
      this.x = 10000;
      this.y = 10000;
      background("black")
      textSize(50);
      fill("red");
      text("wasted", 300, 350);
      text("-Press R to restart-", 200, 600);
      if (keyIsDown(82)) {
        posSpawnX = posDepartX
        posSpawnY = posDepartY
        niveau = 0;
        this.score = 0;
        this.vie = 3;
        dernierScore = this.score
        derniereVie = this.vie
        initNiveau();
      }
    }
  }
  changerNiveaux() {
    if (this.exit() == true && niveau < niveauMax) {
      niveau++;
      initNiveau();
    }
  }
  //////// GESTION DE LA VICTOIRE ////////
  victoire() {
    //console.log
    if (niveau == niveauMax) {
      this.x = 10000;
      this.y = 10000;
      background("white")
      textSize(35);
      fill("black");
      text("Tu es entré dans une salle et tu y as trouvé", 15, 250);
      text("une épée", 15, 300);
      text("Il est grand temps que tu commences ta quête", 15, 350);
      text("et sauve le monde des blocs", 15, 400);
      textSize(50);
      text("Ton score : " + this.score, 150, 500);
      text("-Press R to restart-", 150, 600);
    }
  }
}