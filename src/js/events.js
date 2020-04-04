
var db = firebase.firestore();
let pastEvents=[]
let upcommingEvents=[]
let today = new Date();
    db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.from<= today){
              pastEvents.push(doc)  
            }
            else{
                upcommingEvents.push(doc)
            }
        });
    })
    .catch((err) => console.error(err));

    if('content' in document.createElement('template')) {
        const cardone = document.getElementById('upcommingEvent');
        const cardtwo = document.getElementById('upcommingEvent');
        const pastEvent = document.getElementById('pastEvent');
        let isone

    pastEvents.forEach((event) => {
        const tmpl = document.getElementById('user-card-template').content.cloneNode(true);
        tmpl.querySelector('h2').innerText = user.fullname;
        tmpl.querySelector('.title').innerText = user.title;
        tmpl.querySelector('img').setAttribute("src",user.avatar);
        tmpl.querySelector('.posts h3').innerText = user.stats.posts;
        tmpl.querySelector('.likes h3').innerText = user.stats.likes;
        tmpl.querySelector('.followers h3').innerText = user.stats.followers;
        pastEvent.appendChild(tmpl);
        
      });
      upcommingEvents.forEach((event) => {
        const tmpl = document.getElementById('user-card-template').content.cloneNode(true);
        tmpl.querySelector('h2').innerText = user.fullname;
        tmpl.querySelector('.title').innerText = user.title;
        tmpl.querySelector('img').setAttribute("src",user.avatar);
        tmpl.querySelector('.posts h3').innerText = user.stats.posts;
        tmpl.querySelector('.likes h3').innerText = user.stats.likes;
        tmpl.querySelector('.followers h3').innerText = user.stats.followers;
        if (isone){
            cardone.appendChild(tmpl);
        }else{
            cardtwo.appendChild(tmpl); 
        }
        
        isone=!isone
      });

    } else {
        console.error('Your browser does not support templates');
      }
