$(function(){
    var key = 'AIzaSyAe9WCHk57lLRWnMGfpFLsMh3t16oq2jbI';
    var src = 'data-video-id';
    var iframeSrc = 'https://youtube.com/embed/' + src;

    $('#search').keypress(function(event){
        //console.log('key pressed');

        if(event.keyCode == 13) {
            event.preventDefault();

            var q = $(this).val();

            console.log(q);

            $.ajax({
                url: 'https://www.googleapis.com/youtube/v3/search',
                method: 'GET',
                data: {
                    "key": key,
                    "maxResults": "4",
                    "type": "video",
                    "part": "snippet",
                    "q": q + ' dog'
                }
            }).done(function(response){
                console.log(response);

                $.each(response.items, function(index, video){
                    console.log(video);
                    $('.search-results .video-list').append('<li data-video-id="' + video.id.videoId + '"><img src="' + video.snippet.thumbnails.medium.url + '" /><div>Video: ' + video.snippet.title + '</div></li>');
                });

                $('.search-results').show();

                $('#search').val("");
            });
        //Log out what the user puts in the search box
        }
    });

    //$(document).on('click')("#data-video-id ")()
        //event.preventDefault();
//});


//Don't know why this didn't work^^

    //Get top Corgi videos
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        data: {
            "key": key,
            "maxResults": "8",
            "q": "Corgi",
            "part": "snippet",
            "type": "video"
        }
    }).done(function(response){
        console.log(response);

        $.each(response.items, function(index, video){
            console.log(video);
            $('.corgi-videos .video-list').append("<li data-video-id=" + video.id.videoId + "><a href= 'https://youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src=" + video.snippet.thumbnails.medium.url + " /><div>Video: " + video.snippet.title + "</div></li>");
        });
    });
    //Top Husky Playlists
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            data: {
                "key": key,
                "maxResults": "8",
                "q": "Husky",
                "part": "snippet",
                "type": "playlist"
            }
        }).done(function(response){
            console.log(response);
    
            $.each(response.items, function(index, playlist){
                console.log(playlist);
                $('.husky-playlists .playlist-list').append("<li data-video-id=" + playlist.id.playlistId + "><a href= 'https://youtube.com/playlist?list=" + playlist.id.playlistId + "' target='_blank'><img src=" + playlist.snippet.thumbnails.medium.url + " /><div>Playlist: " + playlist.snippet.title + "</div></li>");
            });
        });
        //Top Dachshund Channels
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            data: {
                "key": key,
                "maxResults": "8",
                "q": "Dachshund",
                "part": "snippet",
                "type": "channel"
            }
        }).done(function(response){
            console.log(response);
    
            $.each(response.items, function(index, channel){
                console.log(channel);
                $('.dachshund-channels .channel-list').append("<li data-video-id=" + channel.id.channelId + "><a href= 'https://youtube.com/channel/" + channel.id.channelId + "' target='_blank'><img src=" + channel.snippet.thumbnails.medium.url + " /><div>Channel: " + channel.snippet.title + "</div></li>");
            });
        });
    });