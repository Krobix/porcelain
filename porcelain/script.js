var pages = [
	"Porcelain is a special substance made out of clay or pottery stones that is used in China. It is made through very complicated processes such as proportioning, molding, firing, and drying. Porcelain has been used in China for a very long time, as they invented it.",
	"Porcelain was used for many things. The most common example of what is was used for is pottery. The medieval Chinese made plates, pots, and other commodities. One of the main things that the Chinese did with it though is sell it. In fact, it was one of their main trade exports on the Silk Road back then, along with silk and a few expensive metals.",
	"Over time, Chinese porcelain became very popular in trade. This is likey because it was an easier solution to create pottery and sculptures. It was also commonly painted on like a canvas, which could have inspired some artists around the world to use it as a way to project their ideas. Artist could paint on this pottery that was made with porcelain and then sell it as a way to spread their art and have a practical income of money.",
	"-The first porcelain was made in the Tang dynasty.<br/>-Porcelain from the medieval era of China is often called 'primitive porcelain'.<br/>-Porcelain has been exported worldwide since it was first created.<br/>-Porcelain is often represented as blue and white, as these colors are meant to represent porcelain as a whole.<br/>-Porcelain was baked in a kiln, which is the name of an oven used for clay today."
];

var titles = [
	"What is porcelain?",
	"What was porcelain used for?",
	"Why was porcelain so popular?",
	"Fun facts about porcelain"
];

var img_srcs = [
	"img/ppot.jpg",
	"img/pplate.jpg",
	"img/pface.jpg",
	"img/phand.jpg"
];
var page_con = document.getElementById("page-content");
var page_title = document.getElementById("page-title");
var page_img = document.getElementById("page-img");
var page_button = document.getElementById("next_page");
var current_page = 0;

function change_page(num){
	try{
		page_con.innerHTML = pages[num];
		page_title.innerHTML = titles[num];
		page_img.src = img_srcs[num];
	}
	catch(e){
		alert("Error: " +- e)
	}
}

page_button.onclick = goto_next_page;
change_page(0);