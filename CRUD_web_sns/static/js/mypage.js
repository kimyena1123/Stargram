function editProfile(){
    const form_user = document.forms['form_user'];
    console.log('form_user', form_user);

    //폼 유효성 검사
    if (!form_user.checkValidity()) {
        form_user.reportValidity();
        return;
    }

    axios({
        method: 'POST',
        url: '/user//profile/edit',
        data: {
            user_id: form_user.user_id.value,
            user_pw: form_user.user_pw.value,
            user_name: form_user.user_name.value,
            user_birth: form_user.user_birth.value
        },
    }).then((res) => {
        return res.data;
    }).then((data) => { // data: server로부터 받은 정보
        alert(data);
    })
}