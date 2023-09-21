const words = ["HFTERX9D", "UI3587Z1", "50", "100"];
const link = "https://e-z.stream/?error=404"
const link1 = "https://watch.brplayer.site/watch?v="
const param = window.location.search;
const urlpa = new URLSearchParams(param); 
if (urlpa.has('w')) {
    const usr = urlpa.get('w');
    document.title = "E-Z - " + usr;
    if (words.includes(usr)) {
        document.getElementById("ifm").src = link1 + usr;
    } else {
        window.location.replace(link);
    }
} else {
    //window.location.replace(link1);
}