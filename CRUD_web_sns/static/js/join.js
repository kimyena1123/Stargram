//===============회원가입================
function register(){
    const form = document.forms['join'];

    console.log('form 확인 >> ', form);

    //폼 유효성 검사
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    axios({
        method:'POST',
        url: '/user/join',
        data: {
            user_id: form.user_id.value,
            user_pw: form.user_pw.value,
            user_name: form.user_name.value,
            user_birth: form.user_birth.value,
        },
    }).then((res) => {
        return res.data;
    }).then((data) => {
        Swal.fire({
            icon: 'success',
            title: '회원가입에 성공했습니다.',
        });

        document.location.href="/user/login";
    });
}