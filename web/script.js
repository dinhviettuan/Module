var selectedRow = ""

function onFormSubmit() {
    if (validate()) {
        var baiViet = readFormData();
        if (selectedRow == "")
            insertNewRecord(baiViet);
        else
            updateRecord(baiViet);
        resetForm();
    }
}

function readFormData() {
    var baiViet = {tieude:"abc",noidung:"abc",hinhanh:"../bao.jpg"};
    baiViet["tieude"] = document.getElementById("tieude").value;
    baiViet["noidung"] = document.getElementById("noidung").value;
    baiViet["hinhanh"] = document.getElementById("hinhanh").value;
    return baiViet;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tieude;
    cell3 = newRow.insertCell(1);
    cell3.innerHTML = data.noidung;
    cell4 = newRow.insertCell(2);
    cell4.innerHTML = data.hinhanh;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("tieude").value = "";
    document.getElementById("noidung").value = "";
    document.getElementById("hinhanh").value = "";
    selectedRow = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tieude").value = selectedRow.cells[0].innerHTML;
    document.getElementById("noidung").value = selectedRow.cells[1].innerHTML;
    document.getElementById("hinhanh").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tieude;
    selectedRow.cells[1].innerHTML = formData.noidung;
    selectedRow.cells[2].innerHTML = formData.hinhanh;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("tieude").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };    
