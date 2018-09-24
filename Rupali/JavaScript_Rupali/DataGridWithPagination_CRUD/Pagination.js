(function(){
	var config = {
		currentPageNumber : 1,
        currentPageSize   : 5,
        maxPageSize: 100,
	},
	no_of_pages = Math.ceil( config. maxPageSize / config.currentPageSize    ),
	results = [];

	function init(){
		for( var x = 0; x < config. maxPageSize; x++ ){
			results[x] = "Result " + x;
		}
		document.getElementById("next").onclick = function() { 
			pager("next");
			return false;
		};
		document.getElementById("previous").onclick = function() { 
			pager("previous"); 
			return false;
		};
		document.getElementById("reset").onclick = function() { 
			pager("reset"); 
			return false;
		};
		document.getElementById("goto").onclick = function() { 
			pager("goto", document.getElementById("page_input").value); 
			return false;
		};
		document.getElementById("page_nav").onclick = function(e) { 
			var currentPageNumber = e.srcElement.getAttribute("data-page");
			if(currentPageNumber){
				pager("goto", currentPageNumber);
			}
			return false;
		};
		update_page();
	}
	
	
	function pager(action, currentPageNumber) {
		switch (action) {
			case "next":
				if( (config.currentPageNumber + 1) < no_of_pages ){ 
					++config.currentPageNumber;
				}
				break;
			 
			case "previous":
				if( (config.currentPageNumber - 1) >= 1 ){
					 --config.currentPageNumber;
				}
				break;
			
			case "goto":
				config.currentPageNumber = currentPageNumber;
				break;
			
			case "reset":
				config.currentPageNumber = 1;
				break;
			
			default:
				break;
		}
		update_page();
	}
	function build_nav() {
		var i,
			page_nav = "";
							
		for( i = config.currentPageNumber; i < no_of_pages; i++ ){
			page_nav += "<li><a data-page=" + i + ">" + i + "</a></li>\n";
		}
		return page_nav;
	}
	function build_results(){
		var i,
			tmp = "",
			start = ( config.currentPageNumber !== 1 )? config.currentPageNumber * config.currentPageSize    : 1,
			end = start + config.currentPageSize   ,
			result;
			
		for( i = start; i < end; i++ ){
			result = results[i];
			if(typeof result !== "undefined"){ 
				tmp += "<li>" + result + "</li>\n";
			}
			else {
				tmp = "";
			}
		}
		return tmp;
	}				
	function update_page(){
		document.getElementById("curr_page").innerText = config.currentPageNumber;
		document.getElementById("page_nav").innerHTML = build_nav();
		document.getElementById("results").innerHTML = build_results();
	}
	window.addEventListener("load", function() {
		init();
	});
})();