let serviec = new todoService();
function getEle(id) {
    return document.getElementById(id);
}
function getToDoList() {
    serviec.getJobAPI()
    .then(function(result){
        renderList(result.data)
    });
};
getToDoList();
function renderList(list) {
    let uncompleteList = ""
    let completeList = "";
    list.forEach((item, index) => {
        if(item.jobCheck) {
            completeList += `<li>
            <div class="jobText">${item.jobContent}</div>
            <div class="marginright"><i onclick="deleteJob(${item.id})" class="fas fa-trash-alt"></i>
            <i class="fas fa-check-circle jobDone"></i>
            </li>`
        } else {
            uncompleteList += `<li>
            <div class="jobText">${item.jobContent}</div>
            <div class="marginright"><i onclick="deleteJob(${item.id})" class="fas fa-trash-alt"></i>
            <i onclick="jobDoneCheck(${item.id})" class="fas fa-check-circle jobDone"></i>
            </li>`
        }
    });
    getEle("todo").innerHTML = uncompleteList;
    getEle("completed").innerHTML = completeList;
}
getEle("addItem").addEventListener("click", () => {
    const jobContent = getEle("newTask").value;
    const jobCheck = false;
    if(!jobContent) {
        alert("Hay nhap CV");
        return
    }
    let job = new Job("", jobContent, jobCheck);
    serviec.addJobAPI(job)
    .then(() => {
        getToDoList();
        getEle("newTask").value = "";
        alert("Add Successs");
    });
});
function jobDoneCheck(id) {
    serviec.getJobIdAPI(id)
    .then((result) => {
        let job = new Job(result.data.id, result.data.jobContent, result.data.jobCheck);
        job.doneCheck();
        serviec.putJobAPI(job)
        .then(() => {
            getToDoList();
            alert("Great!")
        })
    })
}
function deleteJob(id) {
    serviec.deleteJobAPI(id)
    .then(() => {
        getToDoList();
        alert("Done");
    })
}
//
getEle("two").addEventListener("click", () => {
    serviec.getJobAPI()
    .then(function(result){
        let sortarr = result.data;
        sortarr.sort(function(a,b) {
            return a.jobContent.localeCompare(b.jobContent)
        })
        console.log(sortarr)
        renderList(sortarr)
    });
})
getEle("three").addEventListener("click", () => {
    serviec.getJobAPI()
    .then(function(result){
        let sortarr = result.data;
        sortarr.sort(function(a,b) {
            return b.jobContent.localeCompare(a.jobContent)
        })
        renderList(sortarr)
    });
})
