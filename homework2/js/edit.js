window.onload=()=>{
    //일기번호가져오기
    const queryString = window.location.search
    const box = new URLSearchParams(queryString)
    const diaryNum = box.get("number")

    //스토리지에 저장
    const storageDiaryList =
        window.localStorage.getItem("민지의 일기목록")?? "[]"
    const diaryList = JSON.parse(storageDiaryList)

    //현재 일기번호 가져오기
    const diaryBox = diaryList[diaryNum]

    //일기상세 가져오기
    window.document.getElementById("html_diaryUpdateTitleInput")
        .value= diaryBox.title    
    window.document.getElementById("html_diaryUpdateContentInput")
        .value= diaryBox.content
    window.document.getElementsByName("html_fillSelectButton").forEach((el)=>{
        if(el.value ===diaryBox.mood) el.checked = true
    })     
}

const js_updateComplete = ()=>{
    const queryString = window.location.search
    const box = new URLSearchParams(queryString)
    const diaryNum = box.get("number")

    const storageDiaryList = 
        window.localStorage.getItem("민지의 일기목록") ??"[]"
    const diaryList = JSON.parse(storageDiaryList)

    //변경일기 새로 저장
    const updateTitleBox = 
        window.document.getElementById("html_diaryUpdateTitleInput").value
    const updateContentBox=    
        window.document.getElementById("html_diaryUpdateContentInput").value

    let updateFillBox
    window.document.getElementsByName("html_fillSelectButton").forEach((el)=>{
        if (el.checked) updateFillBox = el.value
    })

    diaryList[diaryNum]={
        title: updateTitleBox,
        content: updateContentBox,
        mood:diaryList[diaryNum].date
    }
    window.localStorage.setItem("민지의 일기목록",JSON.stringify(diaryList))

    location.replace (`./detail.html?number=${diaryNum}`)
}