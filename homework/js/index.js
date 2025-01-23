window.onload=()=>{
    const submitButton = document.querySelector(".menu_footer");
    submitButton.addEventListener("click", js_write);
}

const diaryList=[]

const js_write=()=>{

    //날짜
    const date = new Date()
    const formattedDate = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate()}`
    // const option ={
    //     year: date.getFullYear(),
    //     month:(date.getMonth()+1).toString().padStart(2,"0"),
    //     date:date.getDate()
    // }


    //일기 불러오기
    // const dateBox = option.year+"-"+option.month+"-"+option.date
    const titleBox = window.document.getElementById("html_title").value
    const contentBox = window.document.getElementById("html_content").value 

    //기분 불러오기
    // let happyBox = window.document.getElementsByName("fill")[0].checked===true;
    // let wowBox = window.document.getElementsByName("fill")[1].checked===true;
    // let sadBox = window.document.getElementsByName("fill")[2].checked===true;
    // let angryBox = window.document.getElementsByName("fill")[3].checked===true;
    // let exBox = window.document.getElementsByName("fill")[4].checked===true;
    const moodElement = document.querySelector('input[name="fill"]:checked');
    const mood = moodElement ? moodElement.value : "기타";

    if(!titleBox||!contentBox){
        alert("제목과 내용을 모두 입력하세요")
        return
    }

    //일기목록에 추가
    const newDiary = {
        title: titleBox,
        content:contentBox,
        date:formattedDate,
        mode:mood
    }
    diaryList.push(newDiary)

    //일기를 목록에 추가.
    addDiaryThumbnail(newDiary);
   
    //입력값 초기화
    document.getElementById("html_title").value="";
    document.getElementById("html_content").value="";
    const checkedMood = document.querySelector('input[name="fill"]:checked');
    if (checkedMood) checkedMood.checked = false;
    
    alert("일기가 성공적으로 등록되었습니다.")
        
}

const addDiaryThumbnail = (diary) => {
    const diaryContainer = document.querySelector(".diary_thumbnail");

    const newThumbnail = document.createElement("div");
    newThumbnail.className = "one_thumbnail";

    newThumbnail.innerHTML = `
        <img class="thumbnail_img" src="../img/emotion_happy.png" alt="${diary.mood}">
        <div class="thumbnail_sub">
            <div class="thumbnail_fill">${diary.mood}</div>
            <div class="thumbnail_date">${diary.date}</div>
        </div>
        <div class="thumbnail_title">${diary.title}</div>
    `;

    diaryContainer.appendChild(newThumbnail);
};


