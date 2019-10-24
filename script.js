var myData={
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
    "author":{
    "data": [{
		"name_author": "Alejandro Morales",
		"url": "/author/alejandro-morales",
		"type": "master"
			}]
		}
	}]
};


  for(var i=0; i<myData.video.length; i++){
  console.log(myData.video[i]);

  console.log(myData.video[i].id);
  console.log(myData.video[i].name);
  console.log(myData.video[i].url);
  console.log(myData.video[i].author);

    for(var j=0; j<myData.video[i].author.data.length; j++){
      console.log(myData.video[i].author.data[j]);

  console.log(myData.video[i].author.data[j].name_author);
  console.log(myData.video[i].author.data[j].url);
  console.log(myData.video[i].author.data[j].type);
    }
  }
