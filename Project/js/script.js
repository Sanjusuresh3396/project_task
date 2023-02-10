function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



  
var colorDanger = "#FF1744";
Morris.Donut({
  element: 'donut-example',
  resize: true,
  colors: [
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064'
  ],

  data: [
    {label:"Dato Ej.1", value:123, color:colorDanger},
    {label:"Dato Ej.2", value:369},
    {label:"Dato Ej.3", value:246},
    {label:"Dato Ej.4", value:159},
    {label:"Dato Ej.5", value:357}
  ]
});
