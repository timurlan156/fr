(function(w,d){
	console.log(000);
	function randString(){
		var text = '', chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	    for(var i=0; i < 26; i++){text += chars.charAt(Math.floor(Math.random() * chars.length));}
	    return text;
	}
	function refreshCookies(){
		var date = new Date(new Date().getTime()+864000);
		//document.cookie = 'PHPSESSID='+randString()+'; path=/widget/; expires='+date.toUTCString();
		//document.cookie = 'PHPSESSID='+randString()+'; path=/mycab/; expires='+date.toUTCString();
	}
	refreshCookies();
	console.log(); 
	console.log(555);
	console.log(777);
	console.log(999);
	var http = new XMLHttpRequest(), url = "https://www.mycabinet.ru/widget/cookie_init.php", params = "init=1";
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {
		console.log(111);
	    if(http.readyState == 4 && http.status == 200) {
	    	console.log(222);
	        var c = d.createElement('div'),
				m = d.createElement('div'),
				p = w.mc_widget,
				l = d.createElement("link"),
				b = p.o ? d.getElementsByClassName('mycab-widget')[0] : d.getElementById('mycab-widget');

			l.href = 'https://www.mycabinet.ru/widget/external/mow.css';
			l.type = "text/css";
			l.rel = "stylesheet";
			l.media = "screen,print";
			m.id = 'mycab_w_modal';
			d.getElementsByTagName('head')[0].appendChild(l);

			c.setAttribute('id', 'mycab_widget_cont');
			c.style.display = 'none';
			c.innerHTML = '<span id="mycab_widget_close_btn"><span id="mycab_widget_close_btn_span">Закрыть</span><span id="mycab_widget_close_btn_icon"></span></span><iframe id="mycab_widget_frame" src="https://www.mycabinet.ru/widget/?lpu='+p.l+'" style="width: 780px; height: 550px;" frameborder="0"></iframe>';
			b.innerHTML = p.o ? b.innerHTML : p.t;
			d.getElementsByTagName('body')[0].appendChild(c);
			d.getElementsByTagName('body')[0].appendChild(m);
			с = d.getElementById('mycab_widget_close_btn');
			m = d.getElementById('mycab_w_modal');
			с.onclick = function(e){
				refreshCookies();
				m.style.display = 'none';
				c.style.display = 'none';
				document.getElementById('mycab_widget_frame').src += '';
			}
			b.onclick = function(e){
				if(c.style.display == 'none'){
					m.style.display = 'inline-block';
					c.style.display = 'inline-block';
				}else{
					m.style.display = 'none';
					c.style.display = 'none';
				}
			}
	    }
	}
	http.send(params);
})(window,document);