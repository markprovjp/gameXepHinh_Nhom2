let p;

function batdaukeo(){
    p = event.target;
}

function chothavao(){
    event.preventDefault();
}



//kiểm tra xem nếu đối tượng thả vào không có phần tử nào và x = false thì sẽ cho phần tử p vào làm con của đối tượng đó
let x = false;
function thaxong(){

    if(event.target.firstElementChild === null && x === false){
        event.target.appendChild(p);

        x = true;
        

    }else{
        x = false;
        
    }

}






//hàm hiệu ứng 
let deg = 0;
function hieuung(){
    deg += 90;
    document.getElementById(event.target.id).style.transform = `rotate(${deg}deg)`;
}




//hàm để tải các file lên: tạo url cho từng file và lưu trữ vào localStorage , rồi cập nhật thuộc tính src cho từng ảnh
let urlImg = [];
let arrImg = [];
function uploadFile(){
    arrImg = event.target.files; //lấy toàn bộ file đã tải lên ném vào mảng arrImg

    for(let i = 0 ; i<arrImg.length; i++){
       urlImg[i] = URL.createObjectURL(arrImg[i]); //tạo url tạm cho từng file ảnh
       localStorage.setItem(`img${i}`,urlImg[i]); //lưu url tạm vừa tạo ở trên vào localStorage với key là img0, img1,...

    //    console.log(localStorage);
       document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);



    }

    //sau khi đã đinh nghĩa src cho từng img thì chúng ta thông báo cho người dùng 
    alert(`đã tải thành công ${arrImg.length} ảnh mẫu`);

}



function play(){
    event.preventDefault(); 
    let mixArray = urlImg.sort(() => 0.5 - Math.random()); //sort dùng đế sắp xếp mảng theo một tiêu chí xác định ,tiêu chí ở đây sẽ là một đối số random
 
    for(let i = 0 ; i< urlImg.length; i++){  //sau khi đã sắp xếp thì up 
        document.getElementsByTagName("img")[i].src = mixArray[i];

        document.getElementsByTagName("img")[i].style.transform = "rotate(90deg)";

        
    }

    //sau khi đã xáo trộn ảnh thì thiết lập thuộc tính style = blook hoặc none cho play và replay

    document.getElementById("play").style.display = "none";
    document.getElementById("replay").style.display = "block";

}


function replay(){
    event.preventDefault();
    location.reload();  //làm mới trang web để hiện lại từ dầu
}


//sau khi làm mới trang thì sẽ thực hiện sắp xếp lại thứ tự các ảnh đã tải lên nếu có không thì sẽ hiện cái ảnh mặc định
window.onload = function(){
    if(localStorage.length !=0){
        for(let i = 0 ; i< 25; i++){
            urlImg[i] = localStorage.getItem(`img${i}`);
            document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);
        }

    }else{
        for(let i = 0 ; i<25 ; i++){
            urlImg[i] = "./istockphoto.jpg";
            
            document.getElementsByTagName("img")[i].src = "./istockphoto.jpg";
        }
    }
    
    document.getElementById("play").style.display = "block";
    document.getElementById("replay").style.display = "none";
}






























