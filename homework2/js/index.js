window.onload=()=>{
    console.log("민지의 다이어리, 환영~")
}
const diaryArr=[]

const js_write=()=>{
    //날짜 가져오기
    const date = new Date()

    const option = {
        year: date.getFullYear(),
        month: (date.getMonth()+1).toString().padStart(2,"0"),
        date: date.getDate()
    }

    //일기 불러오기
    const dateBox = option.year+"-"+option.month+"-"+option.date
    const titleBox = window.document.getElementById("html_inputTitle").value
    const contentBox = window.document.getElementById("html_inputContent").value

    //기분 불러오기
    let happy = window.document.getElementsByName("html_fillRadio")[0].checked===true
    let sad = window.document.getElementsByName("html_fillRadio")[1].checked===true
    let wow = window.document.getElementsByName("html_fillRadio")[2].checked===true
    let angry = window.document.getElementsByName("html_fillRadio")[3].checked===true
    let ex = window.document.getElementsByName("html_fillRadio")[4].checked===true

    //일기 추가
    const diaryBox ={
        title:titleBox,
        content:contentBox,
        date:dateBox
    }
    diaryArr.push(diaryBox)

    //일기번호 가져오기
    const diaryNum = diaryArr.length-1

    //일기 목록 가져오기
    const html_beforeDiary=
        window.document.getElementById("html_showDiary").innerHTML

    //새 일기목록만들기
    const html_newDiary=`
        <div class="css_diary" onclick="js_viewDiary(${diaryNum})">
            <div class="css_diaryPhoto">
                ${happy === true
                    ? '<img class="css_fillPhoto" src="./assets/images/joy.png" alt="행복" />'
                    : ""
                }
                ${sad === true
                    ? '<img class="css_fillPhoto" src="./assets/images/sadness.png" alt="슬픔" />'
                    : ""
                }
                ${wow === true
                    ? '<img class="css_fillPhoto" src="./assets/images/surprised.png" alt="놀람" />'
                    : ""
                }
                ${angry === true
                    ? '<img class="css_fillPhoto" src="./assets/images/anger.png" alt="화남" />'
                    : ""
                }
                ${ex === true
                    ? '<img class="css_fillPhoto" src="./assets/images/idontknownothing.png" alt="기타타" />'
                    : ""
                }
            </div>
            <div class="css_diaryContent">
            ${
                happy === true
                  ? `<div class="css_fill css_happy">행복해요</div>`
                  : ""
              }
              ${
                sad === true
                  ? `<div class="css_fill css_sad">슬퍼요</div>`
                  : ""
              }
              ${
                wow === true
                  ? `<div class="css_fill css_wow">놀랐어요</div>`
                  : ""
              }
              ${
                angry === true
                  ? `<div class="css_fill css_angry">화나요</div>`
                  : ""
              }
              ${
                ex === true
                  ? `<div class="css_fill css_ex">기타</div>`
                  : ""
              }
                <div class="css_date">${diaryBox.date}</div>
            </div>
            <div class="css_diaryTitle">${diaryBox.title}</div>
            `
    //일기목록 전체 보여주기
    window.document.getElementById("html_showDiary").innerHTML =
        html_beforeDiary+html_newDiary
}

const js_viewDiary = (diaryNumBox)=>{
    const diaryBox = diaryArr[diaryNumBox]
    const titleBox = diaryBox.title
    const contentBox = diaryBox.content

    alert(`
        title: ${titleBox},
        content: ${contentBox}
        `)
}