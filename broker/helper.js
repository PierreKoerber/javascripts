
function string_to_slug(str, separator) {
    var str = str.trim();
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaaaeeeeiiiioooouuuunc------";

    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    return str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
        .replace(/^-+/, "") // trim - from start of text
        .replace(/-+$/, "") // trim - from end of text
        .replace(/-/g, separator);
}

function test1(){
    console.log( string_to_slug("La propriété function.name est une propriété en lecture seule qui renvoie le nom de la fonction courante ou  si celle-ci a été créée de façon anonyme.", "_") ) ;
    console.log( string_to_slug("La propriété function.name est une propriété en lecture seule qui renvoie le nom de la fonction courante ou  si celle-ci a été créée de façon anonyme.", "*") ) ;
    
}