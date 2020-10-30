class Pastille {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type
    this.taille = 16;
    this.offset = (tailleCarre - this.taille) / 2
    this.matrixPiece = [
      ["#ffffff", "#ffffff", "#ffffff", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#ffffff", "#ffffff", "#ffffff"], 
      ["#ffffff", "#ffffff", "#050400", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#050400", "#ffffff", "#ffffff"], 
      ["#ffffff", "#050400", "#d29401", "#d29401", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#050400", "#ffffff"], 
      ["#050400", "#d29401", "#d29401", "#f7af05", "#f7af05", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#f7af05", "#f7af05", "#d29401", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#f7af05", "#f7af05", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#050400"], 
      ["#050400", "#d29401", "#d29401", "#f7af05", "#f7af05", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7cc6a", "#f7af05", "#f7af05", "#d29401", "#d29401", "#050400"], 
      ["#ffffff", "#050400", "#d29401", "#d29401", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#f7af05", "#d29401", "#d29401", "#050400", "#ffffff"], 
      ["#ffffff", "#ffffff", "#050400", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#d29401", "#050400", "#ffffff", "#ffffff"], 
      ["#ffffff", "#ffffff", "#ffffff", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#050400", "#ffffff", "#ffffff", "#ffffff"]
    ]
    this.imgPiece = initSprite(this.matrixPiece);
  }

  afficher() {
    if (this.type == "point"){
      image(this.imgPiece, this.x + this.offset, this.y + this.offset);
    }
    if (this.type == "vie"){
      fill("grey"),
      rect (this.x  + this.offset, this.y  + this.offset, this.taille, this.taille);
      //image(this.imgPiece, this.x + this.offset, this.y + this.offset);
    }
  }
}