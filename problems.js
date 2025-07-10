function addSolvedTracker(){
    const solvedMap = JSON.parse(localStorage.getItem('solvedMap')||   "{}");
      document.querySelectorAll(".solved-checkbox").forEach(cb =>{
        const id = cb.dataset.id;
        cb.checked = solvedMap[id] || false;

        cb.addEventListener("change" , ()=>{
          solvedMap[id] = cb.checked;
          localStorage.setItem('solvedMap', JSON.stringify(solvedMap));
        });
      });
}