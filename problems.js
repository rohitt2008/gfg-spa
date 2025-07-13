function addSolvedTracker(){
    let totalQues = 0;
    const solvedMap = JSON.parse(localStorage.getItem('solvedMap')||   "{}");
    let solvedques = 0;
      document.querySelectorAll(".solved-checkbox").forEach(cb =>{
        totalQues++;
        const id = cb.dataset.id;
        cb.checked = solvedMap[id] || false;
        if(cb.checked) solvedques++;

        cb.addEventListener("change" , ()=>{
          solvedMap[id] = cb.checked;
          localStorage.setItem('solvedMap', JSON.stringify(solvedMap));

          let newCount = 0;
          document.querySelectorAll(".solved-checkbox").forEach(cb => {
            if(cb.checked) newCount++;
          });
          document.getElementById("solved-count").innerText = `${newCount}/${totalQues}`;
        });
      });
    document.getElementById("solved-count").innerText = `${solvedques}/${totalQues}`;
}