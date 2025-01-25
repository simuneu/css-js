//일기번호 가져오기
const queryString = window.location.search
const box = new URLSearchParams(queryString)
const diaryNum = box.get("number")

//스토리지 저장 일기목록 가져오기
const storageDiaryList = 
    window.localStorage.getItem("minjeeList")?? "[]"
const diaryList = JSON.parse(storageDiaryList)

//일기목록에서 현재 일기번호 가져오기
const diaryBox = diaryList[diaryNum]

let mood = diaryBox.mood
let moodMsg
switch(mood) {
    case"happy":
        moodMsg = "행복합니다~"
        img = "./assets/images/joy-imoji.png"
        fontColor="#EA5757"
        break
    case"sad":
        moodMsg = "슬픔픔~"
        img = "./assets/images/sadness-imoji.png"
        fontColor="#28B4E1"
        break
    case "wow":
      moodMsg = "놀랐어요";
      img = "./assets/images/surprised-imoji.png";
      fontColor = "#D59029";
      break;
    case "angry":
      moodMsg = "화나요";
      img = "./assets/images/anger-imoji.png";
      fontColor = "#777";
      break;
    default:
      moodMsg = "etc";
      img = "./assets/images/idontknownothing-imoji.png";
      fontColor = "#A229ED";
      break;
}

//일기 상세 
window.document.getElementById("html_diaryDetailTitle").innerHTML=diaryBox.title
window.document.getElementById("html_diaryFill").innerHTML=fillMsg
window.document.getElementById("html_diaryFill").style.color=fontColor
window.document.getElementById("html_diaryDetailContent").innerHTML=diaryBox.content
window.document.getElementById("html_fillImg").src=img
window.document.getElementById("html_fillImg").alt=moodMsg
window.document.getElementById("html_date").innerHTML= diaryBox.date

const js_update=()=>{
    //일기번호
    const queryString = window.location.search
    const box = new URLSearchParams(queryString)
    const diaryNum = box.get("number")

    //수정
    window.location.href=`./edit.html?number=${diaryNum}`
}


