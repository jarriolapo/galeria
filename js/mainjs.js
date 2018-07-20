let url = 'https://jsonplaceholder.typicode.com/photos'
    $.getJSON(url,function(data){
        console.log(data)
    })

    $.getJSON(url).done(function(data){
        console.log(data)
    })
