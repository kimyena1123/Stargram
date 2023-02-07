function login(){
    const form_login = document.forms['form_login'];

    console.log('form 확인 >> ', form_login);

    //폼 유효성 검사
    if(!form_login.checkValidity()){
        form_login.reportValidity();
        return;
    }

    axios({
        method: 'POST',
        url: '/user/login',
        data: {
            user_id: form_login.user_id.value,
            user_pw: form_login.user_pw.value,
        },
    }).then((res) => {
        return res.data;
    }).then((data) => { //res.send(false or true);
        console.log('data 확인 >>>>>>> ', data);

        if(data){ // 로그인 성공 //data = true
            alert("로그인 성공");
            document.location.href="/"; //Main page로
        }else{ // 로그인 실패 // data = false
            alert('로그인 실패');
           
        }
    })
}