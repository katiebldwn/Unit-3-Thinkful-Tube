$(document).ready(function() {

$('.searchButton').on('click', function() {
	var userSearch = $('.search').val();
	var parameters = {
		part: "snippet",
		key: "AIzaSyA4suIzIpF4swPZrnJIdCTLVj27bXfl4x0",
		q: userSearch,
		maxResults: 30,
		r: "json"
	}

$.getJSON("https://www.googleapis.com/youtube/v3/search", parameters, function(data) {
	$.each(data.items, function() {
		if (this.id.kind === 'youtube#video') {
		var videoLink = "https://www.youtube.com/watch?v="+this.id.videoId;
		var thumbnail = this.snippet.thumbnails.medium.url;
		var title = this.snippet.title;
		$('.results').append("<li class='resultItem'><a href='"+videoLink+"' target='_blank'><img src='"+thumbnail+"'><br>" +title+ "</a></li>");
		}
	})

	//to use embedded vid as thumbnail, opted not to pursue this option...
// $('.results').click(function() {
// 		$(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+this.id.videoId+'?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
// 		})

})

})

})