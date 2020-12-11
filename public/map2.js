let crimeData=[];



  const req=fetch('/api', {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json' 
  },
  })


  console.log(req)