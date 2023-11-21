let name = 'roger'
let pontosRanked = 85
let elo = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendario', 'Imortal']

if (pontosRanked == 9){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[0])
} else if (pontosRanked <= 20){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[1])
}else if (pontosRanked <= 50){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[2])
}else if (pontosRanked <= 80){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[3])
}else if (pontosRanked <= 90){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[4])
}else if (pontosRanked <= 100){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[5])
}else if (pontosRanked >= 101){
    console.log(`o heroi ${name} está com ${pontosRanked} de pontos na ranked e está no ` + elo[6])
}

