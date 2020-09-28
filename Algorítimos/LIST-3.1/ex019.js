function mostrar() {
    if (combo.value == 'spfc') {
        resultado1.style = 'display:block';
        resultado2.style = 'display:none';
        resultado3.style = 'display:none';
        resultado4.style = 'display:none';
    } else if (combo.value == 'santos') {
        resultado2.style = 'display:block';
        resultado1.style = 'display:none';
        resultado3.style = 'display:none';
        resultado4.style = 'display:none';
    } else if (combo.value == 'sccp') {
        resultado3.style = 'display:block';
        resultado1.style = 'display:none';
        resultado2.style = 'display:none';
        resultado4.style = 'display:none';
    } else {
        resultado4.style = 'display:block';
        resultado1.style = 'display:none';
        resultado2.style = 'display:none';
        resultado3.style = 'display:none';
    }
}