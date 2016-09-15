function Add(){
  $("#tblData tbody").append( "<tr class='nav'>"+
                             "<td><input type='text'/></td>"+
                             "<td><input type='text'/></td>"+
                             "<td><input type='text'/></td>"+
                             "<td><button type = 'button' class='btn btn-default glyphicon glyphicon-ok btnSave'></button><button type = 'button' class='btn btn-default glyphicon glyphicon-trash btnDelete'></button></td>"+
                             "</tr>");

  $(".btnSave").bind("click", Save);
  $(".btnDelete").bind("click", Delete);
};

function Save(){
  let par = $(this).parent().parent(); //tr
  let tdName = par.children('td:nth-child(1)');
  let tdPhone = par.children('td:nth-child(2)');
  let tdEmail = par.children('td:nth-child(3)');
  let tdButtons = par.children('td:nth-child(4)');

  tdName.html(tdName.children('input[type=text]').val());
  tdPhone.html(tdPhone.children('input[type=text]').val());
  tdEmail.html(tdEmail.children('input[type=text]').val());
  tdButtons.html("<button type = 'button' class='btn btn-default glyphicon glyphicon-trash btnDelete'></button><button type = 'button' class='btn btn-default glyphicon glyphicon-pencil btnEdit'></button>");

  $('.btnEdit').bind('click', Edit);
  $('.btnDelete').bind('click', Delete);

};

function Edit(){
  let par = $(this).parent().parent(); //tr
  let tdName = par.children('td:nth-child(1)');
  let tdPhone = par.children('td:nth-child(2)');
  let tdEmail = par.children('td:nth-child(3)');
  let tdButtons = par.children('td:nth-child(4)');

    tdName.html("<input type = 'text' id = 'txtName' value='"+tdName.html()+"'/>");
    tdPhone.html("<input type = 'text' id = 'txtPhone' value='"+tdPhone.html()+"'/>");
    tdEmail.html("<input type = 'text' id = 'txtEmail' value='"+tdEmail.html()+"'/>");
    tdButtons.html("<button type = 'button' class='btn btn-default glyphicon glyphicon-ok btnSave'></button>");

    $('.btnSave').bind('click', Save);
    $('.btnEdit').bind('click', Edit);
    $('.btnDelete').bind('click', Delete);

};

function Delete(){
  let par = $(this).parent().parent(); //tr
  par.remove();
};

$(function (){
  //add save edit delete
  $('.btnEdit').bind('click', Edit);
  $('.btnDelete').bind('click', Delete);
  $('#btnAdd').bind('click', Add);

});
$("#search").keyup(function(){
        _this = this;
        // Show only matching TR, hide rest of them
        $.each($("#table tbody tr"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
               $(this).hide();
            else
               $(this).show();
        });
    }); 
