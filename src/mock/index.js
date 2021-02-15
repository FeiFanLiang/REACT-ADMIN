import Mock from 'mockjs';

Mock.mock('/api/login','post',(options) => {
    if(Math.random() > 0.5){
        return {
            code:400,
            message:'登录失败'
        }
    }else {
        return {
            code:200,
            message:'登录成功',
            data:{
                token:"aimm-token"
            }
        }
    }
})