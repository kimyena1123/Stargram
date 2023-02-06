let idTestText = document.querySelector("#checkTextId");
let pwTestText = document.querySelector("#checkTextpw");

const liMyInfoPage = document.querySelector("#myInfoPage");
const liMyPostPage = document.querySelector("#myPostPage");
const liMyLikesPage = document.querySelector("#myLikesPage");

const firstSection = document.querySelector("#firstSection");
const secondSection = document.querySelector("#secondSection");
const thirdSection = document.querySelector("#thirdSection");

liMyInfoPage.addEventListener("click", function(){
    firstSection.classList.remove('d-none');
    secondSection.classList.add('d-none');
    thirdSection.classList.add('d-none');
});

liMyPostPage.addEventListener("click", function(){
    secondSection.classList.remove('d-none');
    firstSection.classList.add('d-none');
    thirdSection.classList.add('d-none');
});

liMyLikesPage.addEventListener("click", function(){
    thirdSection.classList.remove('d-none');
    firstSection.classList.add('d-none');
    secondSection.classList.add('d-none');
});

function userinfoEdit(){
    const form = document.forms['form_userTableInfo'];
    console.log('form select >> ', form);

    //폼 유효성 검사
    if (!form.checkValidity()) { //!false -> true
        form.reportValidity(); // 주황색 입력란을 뜨게 만들 수 있다.
        return;
    }
    
    axios({
        method: 'post',
        url: '/user/mypage/userInfo',
        data: {
            user_id: form.user_id.value,
            user_pw: form.user_pw.value,
            user_name: form.user_name.value,
            user_birth: form.user_birth.value
        },
    }).then((res) => {
        return res.data;
    }).then((data) => {
        console.log('data >> ', data);

        alert(data);
    })
}

//아이디 중복 검사
function idTest(){
    const form = document.forms['form_userTableInfo'];
    console.log('form check of idTest >> ', form);
    console.log('idTestText check of idTest >> ', idTestText);

    if(form.user_id.checkValidity() === false){
        return;
    }

    if(form.user_id.value == ""){
        idTestText.innerHTML = "내용을 채워주세요";
        idTestText.style.color = "red";
        return;
    }
        
        axios({
            method: 'post',
            url: '/user/mypage/idTest',
            data: {
                user_id: form.user_id.value,
            },
        }).then((res) => {
            return res.data;
        }).then((data) => {
            console.log('data 확인 >>> ', data);
            console.log('data.isCheck 확인 .> ', data.isCheck);   
    
            if(data.isCheck){ //data === true 라면 아이디 사용 가능
                console.log('form.user_id.value 확인 >> ', form.user_id.value);
                console.log('data.nowUserId', data.nowUserId);

                idTestText.innerHTML = `${form.user_id.value}는 사용 가능한 아이디입니다.`;
                idTestText.style.color = "blue";
            }else{ //중복된 아이디 -> 사용 불가능
                console.log('form.user_id.value 확인 >> ', form.user_id.value);
                console.log('data.nowUserId', data.nowUserId);

                if(form.user_id.value === data.nowUserId){
                    idTestText.innerHTML = `"${form.user_id.value}"는 현재 아이디입니다.`;
                    idTestText.style.color = "red";
                }else{
                    idTestText.innerHTML = `"${form.user_id.value}"는 이미 존재하는 아이디입니다.`;
                    idTestText.style.color = "red";
                }
              
            }
        })

}