function todoService() {
    this.getJobAPI = function() {
        return axios({
            url:"https://60db0a2d801dcb0017290dc2.mockapi.io/toDo",
            method: "GET"
        });
    };
    this.addJobAPI = function(job) {
        return axios({
            url:"https://60db0a2d801dcb0017290dc2.mockapi.io/toDo",
            method: "POST",
            data: job
        });
    };
    this.deleteJobAPI = function(id) {
        return axios({
            url:`https://60db0a2d801dcb0017290dc2.mockapi.io/toDo/${id}`,
            method: "DELETE"
        });
    };
    this.getJobIdAPI = function(id) {
        return axios({
            url: `https://60db0a2d801dcb0017290dc2.mockapi.io/toDo/${id}`,
            method: "GET"
        });
    };
    this.putJobAPI = function(job) {
        return axios({
            url: `https://60db0a2d801dcb0017290dc2.mockapi.io/toDo/${job.id}`,
            method: "PUT",
            data: job
        });
    };
}