$(document).ready(function(){
    const name = $("#name");
    const email = $("#email");
    const phone = $("#phone");
    const dept = $("#department");
    const dob = $("#dob");
    const table = $('#tableone');
    const ele =$('employee')

    $('#tableone').click(function(event){
        $.ajax({
            type: "GET",
            url: "employees",
            success: function(response){
                console.log(response)
                const tableBody = $("tbody");
                let tr = '';
                response.map(function(item){
                    tr += `
                    <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.department}</td>
                    <td>${item.dob}</td>
                    <td><button class="btn btn-danger">DEL</button></td>
                    </tr>
                    `;
                })
                tableBody.append(tr);
            },
            fail: function(data){
                console.log(data);
            }
        })
    })
});