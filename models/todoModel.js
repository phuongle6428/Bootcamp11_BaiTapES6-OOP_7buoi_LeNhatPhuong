class Job {
    constructor(_id, _jobContent, _jobcheck) {
        this.id = _id;
        this.jobContent = _jobContent;
        this.jobCheck = false;
    }
    doneCheck() {
        this.jobCheck = true;
    }
}