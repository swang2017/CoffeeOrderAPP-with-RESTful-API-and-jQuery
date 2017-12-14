
let currentOrderURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"



$("#btnShowAllOrders").click(function(){
    $('#showAllOrders').html("")
    $.get(currentOrderURL,function(data){
    for(element in data) {
            $("<div>")
            .append($("<li>").html("Customer Email:  "+data[element].emailAddress +"   ;    "+ "Coffee Ordered:  "+data[element].coffee))
            .appendTo($('#showAllOrders'))}}
        )
      })

      $("#btncollapseOrderList").click(function(){
      $('#showAllOrders').html("")})


$("#btnOrder").click(function(){
$('#displayResponse').html("")
    let email = $("#emailBox").val()
    let description = $("#descriptionTextBox").val()
    let data = {emailAddress: email,coffee:description}

    $.post(currentOrderURL,data,function(response){

      $("<div>")
      .append($("<li>").html("The order: '"+response.coffee+"'   for customer:  "+response.emailAddress+ "  has been placed!"))
      .appendTo($('#displayResponse'))

      })
})


$("#btnDelete").click(function(){

    let deleteEmail = $("#deleteByEmailBox").val()
    let data = {emailAddress: deleteEmail}
    let deleteItemURL ='http://dc-coffeerun.herokuapp.com/api/coffeeorders/'+deleteEmail
        $.ajax({
        url: deleteItemURL,
        type: 'DELETE',
        data: data,
        success: function(response){

          $('#showAllOrders').html("")
          $.get(currentOrderURL,function(data){
          for(element in data) {
                  $("<div>")
                  .append($("<li>").html("Customer Email:  "+data[element].emailAddress +"   ;    "+ "Coffee Ordered:  "+data[element].coffee))
                  .appendTo($('#showAllOrders'))}})

        }
      })})

      $("#btnOrderByEmail").click(function(){
      $('#showAllOrders').html("")
          let orderByEmail = $("#orderByEmail").val()
          let data = {emailAddress: orderByEmail}
          let orderByEmailURL ='http://dc-coffeerun.herokuapp.com/api/coffeeorders/'+orderByEmail

          $.get(orderByEmailURL,data,function(response){

            $("<div>")
            .append($("<li>").html("The order: '"+response.coffee+"'   for customer:  "+response.emailAddress+ "  has been placed!"))
            .appendTo($('#showAllOrders'))

            })
      })

    // $.post(currentOrderURL,data,function(response){
    //
    //   $("<div>")
    //   .append($("<li>").html("The order: '"+response.coffee+"'   for customer:  "+response.emailAddress+ "  has been placed!"))
    //   .appendTo($('#displayResponse'))
    //
