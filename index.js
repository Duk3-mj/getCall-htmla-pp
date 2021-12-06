 const getTopStories = async () => {
     var data = []
    await fetch("http://10.23.34.45/getTimeStories")
    .then((res) => res.json()
        .then((json) => {
          data =json
        })
      ).catch(err => alert("failto fetch:  "+err))
      console.log(data)
      return data.slice(0,5)
} 

getTopStories().then(top5Stories => console.log(top5Stories))