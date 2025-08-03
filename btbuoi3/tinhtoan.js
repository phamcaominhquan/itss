


//phuongTrinhBac2

function start() {


let a = 1;
let b = -3;
let c = 2; 


function phuongTrinhBac2(a, b, c) {
    if (a === 0) {
        return -c / b;
    }  else {
        let delta = b * b - 4 * a * c;
        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return 'Phương trình có hai nghiệm phân biệt: x1 = ' + x1 + ', x2 = ' + x2;
        }    
        else if (delta === 0) {
            x1 = x2 = -b / (2 * a);
            return 'Phương trình có nghiệm kép: x1 = x2 = ' + x1;
        }
        else {            return 'Phương trình vô nghiệm';
        }
    }    
}

let a1 =parseInt(prompt('Nhập hệ số a:'));
let b1 =parseInt(prompt('Nhập hệ số b:'));
let c1 =parseInt(prompt('Nhập hệ số c:'));

console.log(phuongTrinhBac2(a1, b1, c1));



//kiemTraNamNhuan

function NamNhuan (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} khong la nam nhuan`;
        }
    } else {
        if (year % 4 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} khong la nam nhuan`;
        }
    }
}

function Thangtrongngay(month, year) {
    if (month < 1 || month > 12) {
        return "Thang khong hop le";
    }

    const daysInMonth = [31, (NamNhuan(year).includes("khong la nam nhuan") ? 28 : 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return `Thang ${month} nam ${year} co ${daysInMonth[month - 1]} ngay.`;
}


let year = parseInt(prompt("Nhap nam: "));
console.log(NamNhuan(year));

let month = parseInt(prompt("Nhap thang: "));
console.log(Thangtrongngay(month, year));




//lam choi nhapDiemTinhHocLuc

let diem1 = parseFloat(prompt('Nhập điểm 1:'));
let diem2 = parseFloat(prompt('Nhập điểm 2:'));
let diem3 = parseFloat(prompt('Nhập điểm 3:'));
let diemTrungBinh;
function nhapDiemTinhHocLuc(diem1, diem2, diem3) {
    if (0 < diem1 && diem1 <= 10 && 0 < diem2 && diem2 <= 10 && 0 < diem3 && diem3 <= 10) {
    } else {
        return 'Điểm không hợp lệ. Vui lòng nhập lại.';
    }
    diemTrungBinh = (diem1 + diem2 + diem3) / 3;
    if (diemTrungBinh >= 8) {
        return 'Học lực giỏi'+ " " + diemTrungBinh.toFixed(1);
    } else if (diemTrungBinh >= 6.5) {
        return 'Học lực khá'+ " " + diemTrungBinh.toFixed(1);
    } else if (diemTrungBinh >= 5) {
        return 'Học lực trung bình'+ " " + diemTrungBinh.toFixed(1);
    } else {
        return 'Học lực yếu' + " " + diemTrungBinh.toFixed(1);
    }


}

console.log(nhapDiemTinhHocLuc(diem1, diem2, diem3));

loop: while (true) {
    let nhapLai = prompt('Bạn có muốn nhập lại điểm không? (có/không)');
    if (nhapLai.toLowerCase() === 'có') {
        diem1 = parseFloat(prompt('Nhập điểm 1:'));
        diem2 = parseFloat(prompt('Nhập điểm 2:'));
        diem3 = parseFloat(prompt('Nhập điểm 3:'));
        console.log(nhapDiemTinhHocLuc(diem1, diem2, diem3));   
        console.log('Điểm trung bình: ' + diemTrungBinh.toFixed(1));
    }
    else if (nhapLai.toLowerCase() === 'không') {
        console.log('Cảm ơn bạn đã sử dụng chương trình!');
        break loop;
    }
    else {
        console.log('Lựa chọn không hợp lệ. Vui lòng nhập lại.');
    }
}


}btn.addEventListener("click", start);

