$("#showBtn").click(() => {
    let displayStatus = $("#addForm").css("display")
    if (displayStatus == "block") {
        $("#addForm").fadeOut()
    } else {
        $("#addForm").fadeIn()
    }
})