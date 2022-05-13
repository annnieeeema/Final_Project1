const url = "https://api.quotable.io/random"

const $quote = $('#content'); 
const $author = $('#author'); 
const $getQuote = $('#getQuote'); 

//events 
//Button switches color during hover 
$getQuote.on('click', getQuote); 
$('#getQuote').hover(function(){
    $(this).css('background-color', 'wheat'); 
}); 
$('#getQuote').mouseleave(function(){
    $(this).css('background-color', 'linen'); 
})


//functions 
function getQuote(event){
    event.preventDefault()

    $.ajax(url).then(function(data){
        console.log('quote generated')

        $quote.text(data.content)
        $author.text(data.author)

    }, function(error){
        console.log('something is wrong')
        console.log(error)
    })
}
