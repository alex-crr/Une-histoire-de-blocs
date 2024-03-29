let niveaux = [];
let niveau = 0;
let niveauMax = 4;
let dernierScore = 0
let derniereVie = 3

niveaux[0] = [
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 2, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13],
  [11, 1, 1, 1, 1, 1, 1, 2, 2, 2, 20, 1, 1, 1, 1, 1, 1, 1, 13, 13],
  [11, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [11, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 21, 1, 1, 1, 1, 11],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 12, 12, 12, 12, 12, 12, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
]
niveaux[1] = [
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 30, 2, 30, 2, 30, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 13, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 13],
  [13, 2, 22, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 13, 2, 2, 13],
  [0, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 13, 2, 22, 2, 13, 2, 2, 13],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 2, 2, 2, 13, 2, 2, 13],
  [13, 13, 13, 13, 2, 2, 2, 13, 2, 2, 2, 2, 13, 13, 13, 2, 13, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 13, 13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 13, 13, 2, 2, 22, 2, 13, 13, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 2, 2, 2, 2, 13],
  [13, 2, 13, 2, 2, 2, 2, 30, 2, 30, 2, 30, 2, 30, 13, 13, 13, 2, 2, 13],
  [13, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
];
niveaux[2] = [
  [13, 13, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 13, 13, 13, 2, 13],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 22, 13, 2, 2, 2, 2, 2, 30, 2, 2, 2, 2, 13],
  [13, 2, 2, 13, 13, 13, 2, 2, 13, 2, 22, 13, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 13, 2, 13, 2, 2, 13, 2, 13, 13, 2, 2, 30, 2, 2, 2, 2, 13],
  [13, 2, 30, 13, 2, 13, 2, 2, 2, 2, 13, 2, 2, 2, 2, 2, 13, 2, 2, 13],
  [13, 2, 2, 13, 2, 13, 13, 13, 13, 13, 13, 2, 2, 2, 2, 2, 13, 2, 2, 13],
  [13, 2, 2, 13, 13, 13, 2, 30, 2, 30, 2, 30, 2, 30, 2, 30, 13, 2, 2, 13],
  [13, 2, 2, 2, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [13, 13, 13, 13, 13, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 22, 13, 13, 13, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 13, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
];
niveaux[3] = [
  [13, 13, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 30, 2, 2, 2, 2, 2, 2, 2, 2, 2, 31, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 13, 13, 13, 13, 2, 2, 2, 2, 2, 13],
  [13, 2, 30, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 13, 2, 2, 30, 2, 2, 2, 13, 13, 13, 2, 13],
  [13, 2, 30, 2, 13, 2, 31, 2, 13, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 22, 13, 13, 2, 13, 13, 2, 2, 2, 2, 2, 13],
  [13, 2, 30, 2, 13, 2, 13, 13, 13, 13, 22, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 30, 2, 2, 13],
  [13, 2, 30, 2, 13, 2, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 13, 2, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 22, 13, 2, 2, 2, 2, 13, 22, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 13, 13, 13, 2, 30, 30, 2, 13, 13, 13, 13, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 13, 13]
]
niveaux[4] = [
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 13, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 30, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
]

let posDepartX = 80;
let posDepartY = 80;
let posSpawnX;
let posSpawnY;
let tailleCarre = 40;
let tailleCanvas = 800;
var tabChemin = [];
var tabMur = [];
var tabCreature = [];
var tabPastille = [];
var joueur;

function setup() {
  frameRate(60)
  createCanvas(tailleCanvas, tailleCanvas + 3 * tailleCarre);
  background("#EEE");
  initNiveau();
  noStroke()
}

function draw() {
  background("#EEE")
  for (var i = 0; i < tabChemin.length; i++) {
    tabChemin[i].afficher();
  };
  for (var i = 0; i < tabPastille.length; i++) {
    tabPastille[i].afficher();
  };
  for (var i = 0; i < tabMur.length; i++) {
    tabMur[i].afficher();
  };
  for (var i = 0; i < tabCreature.length; i++) {
    tabCreature[i].bouger();
  };
  joueur.bouger();
}

function initSprite(matrix) {
  img = createImage(matrix[0].length, matrix.length);
  img.loadPixels(); for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      if (matrix[j][i] != "#ffffff") {
        img.set(i, j, color(matrix[j][i]));
      }
      else {
        img.set(i, j, color(0, 0, 0, 0));
      }
    }
  }
  img.updatePixels(); return img;
}

function initNiveau() {
  tabChemin = [];
  tabMur = [];
  tabCreature = [];
  tabPastille = [];
  for (var y = 0; y < niveaux[niveau].length; y++) {
    for (var x = 0; x < niveaux[niveau][y].length; x++) {
      if (niveaux[niveau][y][x] == 0) {
        joueur = new Joueur(x * tailleCarre, y * tailleCarre);
        posSpawnX = x * tailleCarre;
        posSpawnY = y * tailleCarre;
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 1) {
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "herbe"));
      }
      if (niveaux[niveau][y][x] == 2) {
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "chemin de terre"));
      }
      if (niveaux[niveau][y][x] == 10) {
        tabMur.push(new Mur(x * tailleCarre, y * tailleCarre, "mur de pierre"));
      }
      if (niveaux[niveau][y][x] == 11) {
        tabMur.push(new Mur(x * tailleCarre, y * tailleCarre, "buisson"));
      }
      if (niveaux[niveau][y][x] == 12) {
        tabMur.push(new Mur(x * tailleCarre, y * tailleCarre, "eau"));
      }
      if (niveaux[niveau][y][x] == 13) {
        tabMur.push(new Mur(x * tailleCarre, y * tailleCarre, "paroi de pierre"));
      }
      if (niveaux[niveau][y][x] == 20) {
        tabCreature.push(new Creature(x * tailleCarre, y * tailleCarre, "amical", "PNJ"));
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 21) {
        tabCreature.push(new Creature(x * tailleCarre, y * tailleCarre, "passif", "panique"));
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 22) {
        tabCreature.push(new Creature(x * tailleCarre, y * tailleCarre, "hostile", "randomPoursuivant"));
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 30) {
        tabPastille.push(new Pastille(x * tailleCarre, y * tailleCarre, "point"));
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 31) {
        tabPastille.push(new Pastille(x * tailleCarre, y * tailleCarre, "vie"));
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
      if (niveaux[niveau][y][x] == 3) {
        tabChemin.push(new Chemin(x * tailleCarre, y * tailleCarre, "spawnPoint"));
      }
    }
  }
}