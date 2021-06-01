function openNav(x) {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("nav_t").style.padding = "63px";
    document.getElementById("slid_bg").style.width = "100%";
    // x.classList.toggle("change");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("slid_bg").style.width = "0";
    document.getElementById("nav_n").style.padding = "0";
    document.getElementById("nav_t").style.padding = "0";
    // document.getElementById("aa").classList.remove("change");
  }