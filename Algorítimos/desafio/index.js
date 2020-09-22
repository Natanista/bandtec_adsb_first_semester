function calcular(){
var areaRetangulo = ((2 * Number(valor.value) + 1) * (3 * Number(valor.value) + 1)) / 2;
var areaTriangulo = (Number(valor.value) * (2 * Number(valor.value) - 1)) / 2;
var areaVerde = areaRetangulo - areaTriangulo;
resultado.innerHTML = `<span style="background-color:green;">A área verde é de <u><b>${areaVerde}m2</b></u></span>, <span style="color:yellow;">pois o triangulo tem área de <b><u>${areaTriangulo}m2<u/></b></span> e o <span style="color:green;">retângulo tem área de <b>${areaRetangulo}m2</b></span>`;
}