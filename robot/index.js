// 发送事件
$('#send-btn').click(function(){
    var val = $('#send-text').val();
    if(val){
        renderDom('mime', val);
        // 清空输入框文本
        $('#send-text').val('')
        $.ajax({
            url:'https://developer.duyiedu.com/edu/turing/chat',
            type: 'GET',
            data: {
                text: val
            },
            dataType: 'json',
            success: function(res){
                // console.log(res)
                renderDom('robot', res.text)
            }
        })
    }
})
// 回车事件
$('#send-text').on('keydown', function(e){
    // console.log(e)
    if(e.keyCode == 13){
        $('#send-btn').click()
    }
})
// 渲染文本
/**
 * 
 * @param {*} who 调用函数的对象
 * @param {*} text 文本输入
 */
function renderDom(who, text){
    $(`<div class="${who}">
    <div class="avator"></div>
    <div class="text">${text}</div>
    </div>`).appendTo('.contain');
    // 内容置底
    $('.contain').scrollTop($('.contain')[0].scrollHeight - $('.contain').innerHeight())
}