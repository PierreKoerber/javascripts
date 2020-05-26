// pierre koerber (c) 2020




String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    } ;

String.prototype.startsWith = function(needle) {
    return (this.indexOf(needle) == 0);
};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};    
String.prototype.slug=function(separator="_")
    {
        var str = this.trim();
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
