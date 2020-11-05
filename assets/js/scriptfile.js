function display(id) {
           var home=document.getElementById("home");
           var about=document.getElementById("about");
           var contact=document.getElementById("contactme");
           var gallery=document.getElementById("gallery");
           if(id=="home") {
                home.style.display='block';
                about.style.display='none';
                contact.style.display='none';
                gallery.style.display='none';
           }
           if(id=="about") {
                home.style.display='none';
                about.style.display='block';
                contact.style.display='none';
                gallery.style.display='none';
           }
           if(id=="contact") {
                home.style.display='none';
                about.style.display='none';
                contact.style.display='block';
                gallery.style.display='none';
           }
           if(id=="gallery") {
                home.style.display='none';
                about.style.display='none';
                contact.style.display='none';
                gallery.style.display='block';
           }
    }