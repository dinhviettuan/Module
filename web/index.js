var baiViet = {
	tieude: ["TOP 5 XE ĐẮT NHẤT THẾ GIỚI","NGẮM QUÁI THÚ CỦA TỔNG THỐNG MỸ DONAL TRUMP","TOP 5 XE BÁN CHẠY NHẤT THẾ GIỚI"],
	noidung: ["ngắm siêu xe top 5 đắt thế giới ","Xe 'quái thú' mới của ông Trump giá 1,5 triệu USD, có thể phóng điện","top xe bán chạy nhất năm 2019"],
};
var imgUrl = ['1.jpg','2.jpg','3.jpg'];

$('#imageBlock').show(function() {
  $('#imageBlock').find('img').attr('src', imgUrl[0])
});
$('#imageBlock1').show(function() {
  $('#imageBlock1').find('img').attr('src', imgUrl[1])
});
$('#imageBlock2').show(function() {
  $('#imageBlock2').find('img').attr('src', imgUrl[2])
});
// $('#imageBlock3').show(function() {
//   $('#imageBlock3').find('img').attr('src', imgUrl[3])
// });
// $('#imageBlock4').show(function() {
//   $('#imageBlock4').find('img').attr('src', imgUrl[4])
// });
// $('#imageBlock5').show(function() {
//   $('#imageBlock5').find('img').attr('src', imgUrl[5])
// });
// $('#imageBlock6').show(function() {
//   $('#imageBlock6').find('img').attr('src', imgUrl[6])
// });
// $('#imageBlock7').show(function() {
//   $('#imageBlock7').find('img').attr('src', imgUrl[7])
// });
// $('#imageBlock8').show(function() {
//   $('#imageBlock8').find('img').attr('src', imgUrl[8])
// });
// $('#imageBlock9').show(function() {
//   $('#imageBlock9').find('img').attr('src', imgUrl[9])
// });
// $('#imageBlock10').show(function() {
//   $('#imageBlock10').find('img').attr('src', imgUrl[10])
// });
// $('#imageBlock11').show(function() {
//   $('#imageBlock11').find('img').attr('src', imgUrl[11])
// });




document.getElementById("1").innerHTML = baiViet["tieude"][0];
document.getElementById("1.1").innerHTML = baiViet["noidung"][0];
document.getElementById("2").innerHTML = baiViet["tieude"][1];
document.getElementById("2.1").innerHTML = baiViet["noidung"][1];
document.getElementById("3").innerHTML = baiViet["tieude"][2];
document.getElementById("3.1").innerHTML = baiViet["noidung"][2];


