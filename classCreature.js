class Creature {
  constructor(x, y, type, comportement) {
    this.x = x;
    this.y = y;
    this.vitesse = 1
    this.taille = 32;
    this.offset = (tailleCarre - this.taille) / 2
    this.type = type;
    this.comportement = comportement;
    this.directions;
  }
  //////// DEPLACEMENT + COLLISIONS MURS ////////
  bouger() {
    if (this.type == "hostile") {
      //// DEPLACEMENT RANDOM ////
      if (this.comportement == "random") {
        this.direction = random(["droite", "haut", "gauche", "bas"]);
        if (this.direction == "droite" && !this.collision(this.x + 1, this.y)) {
          this.x += this.vitesse;
        }
        if (this.direction == "haut" && !this.collision(this.x - 1, this.y)) {
          this.x -= this.vitesse;
        }
        if (this.direction == "gauche" && !this.collision(this.x, this.y + 1)) {
          this.y += this.vitesse;
        }
        if (this.direction == "bas" && !this.collision(this.x, this.y - 1)) {
          this.y -= this.vitesse;
        }
      }
      //// DEPLACEMENT POURSUITE (+ RANDOM A AJOUTER EVENTUELLEMENT)////
      if (this.comportement == "poursuivant") {
        if (this.x < joueur.x && !this.collision(this.x + 1, this.y)) {
          this.x += this.vitesse;
        }
        if (this.x > joueur.x && !this.collision(this.x - 1, this.y)) {
          this.x -= this.vitesse;
        }
        if (this.y < joueur.y && !this.collision(this.x, this.y + 1)) {
          this.y += this.vitesse;
        }
        if (this.y > joueur.y && !this.collision(this.x, this.y - 1)) {
          this.y -= this.vitesse;
        }
      }
      //// DEPLACEMENT RANDOM + POURSUITE A DISTANCE////
      if (this.comportement == "randomPoursuivant") {
        if (dist(this.x + this.taille / 2, this.y + this.taille / 2, joueur.x + joueur.taille / 2, joueur.y + joueur.taille / 2) < 100) {
          if (this.x < joueur.x && !this.collision(this.x + 1, this.y)) {
            this.x += this.vitesse;
          }
          if (this.x > joueur.x && !this.collision(this.x - 1, this.y)) {
            this.x -= this.vitesse;
          }
          if (this.y < joueur.y && !this.collision(this.x, this.y + 1)) {
            this.y += this.vitesse;
          }
          if (this.y > joueur.y && !this.collision(this.x, this.y - 1)) {
            this.y -= this.vitesse;
          }
        }
        else {
          this.direction = random(["droite", "haut", "gauche", "bas"]);
          if (this.direction == "droite" && !this.collision(this.x + 1, this.y)) {
            this.x++;
          }
          if (this.direction == "haut" && !this.collision(this.x - 1, this.y)) {
            this.x--;
          }
          if (this.direction == "gauche" && !this.collision(this.x, this.y + 1)) {
            this.y++;
          }
          if (this.direction == "bas" && !this.collision(this.x, this.y - 1)) {
            this.y--;
          }
        }
      }
    }
    //// DEPLACEMENT ALLER RETOUR ////
    //// DEPLACEMENT ALLER RETOUR + ACTIVATION A DISTANCE ////
    //// IMMOBILE + ACTIVATION A DISTANCE ////

    if (this.type == "amical") {
      //// IMMOBILE + ACTIVATION A DISTANCE ////
      if (this.comportement == "PNJ" && dist(this.x + this.taille / 2, this.y + this.taille / 2, joueur.x + joueur.taille / 2, joueur.y + joueur.taille / 2) < 40) {
        joueur.mouvement = false;
        textSize(20);
        fill("black");
        text("Tu tombes à pic mon garçon!! Le monde des", 325, 830);
        text("blocs court un grave danger et seul toi peut", 325, 850);
        text("le sauver !", 325, 870);
        text("Rentre dans la grotte et récupère une arme.", 325, 890);
        text("Fais attention aux blocs bleus et ne te retourne pas.", 325, 910);
        joueur.mouvement = true;
      }
      if (this.comportement == "PNJ" && dist(this.x + this.taille / 2, this.y + this.taille / 2, joueur.x + joueur.taille / 2, joueur.y + joueur.taille / 2) > 40) {
        textSize(20);
        fill("black");
        text("Toi! Oui, toi. Viens me voir.", 350, 830);
      }

      //// DEPLACEMENT ALLER RETOUR + ACTIVATION A DISTANCE ////
    }

    if (this.type == "passif") {
      //// DEPLACEMENT ALLER RETOUR ////
      //// DEPLACEMENT PANIQUE ////
      if (this.comportement == "panique") {
        if (this.x < joueur.x && !this.collision(this.x + 1, this.y)) {
          this.x--;
        }
        if (this.x > joueur.x && !this.collision(this.x - 1, this.y)) {
          this.x++;
        }
        if (this.y < joueur.y && !this.collision(this.x, this.y + 1)) {
          this.y--;
        }
        if (this.y > joueur.y && !this.collision(this.x, this.y - 1)) {
          this.y++;
        }
      }
      //// DEPLACEMENT RANDOM ////
      if (this.comportement == "random") {
        if (dist(this.x + this.taille / 2, this.y + this.taille / 2, joueur.x + joueur.taille / 2, joueur.y + joueur.taille / 2) < 100) {
          this.vitesse = 4;
          if (this.x < joueur.x && !this.collision(this.x + this.vitesse, this.y)) {
            this.x -= this.vitesse;
          }
          if (this.x > joueur.x && !this.collision(this.x - this.vitesse, this.y)) {
            this.x += this.vitesse;
          }
          if (this.y < joueur.y && !this.collision(this.x, this.y + this.vitesse)) {
            this.y -= this.vitesse;
          }
          if (this.y > joueur.y && !this.collision(this.x, this.y - this.vitesse)) {
            this.y += this.vitesse;
          }
        }
        else {
          this.vitesse = 1
          this.direction = random(["droite", "haut", "gauche", "bas"]);
          if (this.direction == "droite" && !this.collision(this.x + 1, this.y)) {
            this.x++;
          }
          if (this.direction == "haut" && !this.collision(this.x - 1, this.y)) {
            this.x--;
          }
          if (this.direction == "gauche" && !this.collision(this.x, this.y + 1)) {
            this.y++;
          }
          if (this.direction == "bas" && !this.collision(this.x, this.y - 1)) {
            this.y--;
          }
        }
      }
    }
    // rajouter les glissements
    this.bords();
    this.collision();
    this.afficher();
  }
  //////// GESTION DES BORDS ////////
  /*bords() {
    if (this.x < 0) this.x = tailleCanvas - this.taille;
    if (this.y < 0) this.y = tailleCanvas - this.taille;
    if (this.x + this.taille > tailleCanvas) this.x = 0;
    if (this.y + this.taille > tailleCanvas) this.y = 0;
  }*/
  bords() {
    if (this.x + this.taille > tailleCanvas) this.x = tailleCanvas - this.taille;
    if (this.x < 0) this.x = 0;
    if (this.y + this.taille > tailleCanvas) this.y = tailleCanvas - this.taille;
    if (this.y < 0) this.y = 0;
  }
  //////// AFFICHAGE ////////
  afficher() {
    if (this.type == "hostile") {
      fill("blue");
      rect(this.x + this.offset, this.y + this.offset, this.taille, this.taille);
    }
    if (this.type == "amical") {
      fill("teal");
      rect(this.x + this.offset, this.y + this.offset, this.taille, this.taille);
    }
    if (this.type == "passif") {
      fill("lime");
      rect(this.x + this.offset, this.y + this.offset, this.taille, this.taille);
    }
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
          console.log("touché");
        return true;
      }
    }
    return false;
  }

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
        return true;
      }
    }
    return false
  }
}