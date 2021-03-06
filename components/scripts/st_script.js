d3.csv("./data/scores.csv", function(d) {
  return {
    id: d.SchoolID,
    district: d.districtname_new,
    school: d.SCHOOLNAME_NEW,
    type: d.grds,
    metro: d.Metro7county,
    region: d.Location,
    location: d.SchoolLocationCountyName,
    county: d.SchoolLocationCountyName,
    year: String(d.datayr),
    subject: d.subject,
    profpct: +d.PctProf,
    freelunch: +d.FreeLunch,
    povertypct: +d.PctPoverty,
    povertycat: d.PovertyCategory,
    minoritypct: +d.pctminority,
    overallcat: d.Overall,
    predicted: +d.Predicted,
    residual: +d.residual,
    category: d.CategoryName,
    enrollment: d.K12Enr
  };
}, function(error, rows) {

var data = rows;

    var povShade;
    var raceShade, lunchShade;
    var gradeShade, gradeShade2;
    var currentDistrict = "";
    var thisDistrict = "All Districts";

d3.select("#listedSchools").selectAll(".district")
  .data(data.filter(function(d) { return d.year == "16 to 17" && d.subject == "R"; })).enter().append("div")
  .attr("class",function(d) { 

    var colorCode = "";

    var category;
        for (var k=0; k < data.length; k++){
      if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "16 to 17"){
        category = data[k].category;
      }
    }

    if ((category == "Better than expected") && (d.category == "Better than expected")) {
      colorCode = "bothScores";
    }
    else if (d.category == "Better than expected") {
      colorCode = "readingScores";
    } else {
      colorCode = "mathScores";
    }

    return "switch district " + colorCode; 

  })
  .attr("categoryr",function(d) { 
    var category;
    if (d.category == "About as expected") { category = "expected"; }
    else if (d.category == "Better than expected") { category = "better"; }
    else if (d.category == "Falling short") { category = "worse"; }
    return d.category; 
  })
  .attr("categoryo",function(d) { 
    var category;
    if (d.categoryO == "About as expected") { category = "expected"; }
    else if (d.categoryO == "Better than expected") { category = "better"; }
    else if (d.categoryO == "Falling short") { category = "worse"; }
    return category; 
  })
  .attr("categoryp",function(d) { 
    var category;
    if (d.povertycat == "High") { category = "High"; }
    else if (d.povertycat == "Medium") { category = "Medium"; }
    else if (d.povertycat == "Low") { category = "Low"; }
    return category; 
  })
  .attr("categorym",function(d) { 
    var category;
        for (var k=0; k < data.length; k++){
      if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "16 to 17"){
        category = data[k].category;
      }
    }
    return category; 
  })
  .attr("district",function(d) { return d.district; })
  .attr("id",function(d) { return "s" + d.id; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .on("click",function(d){

    // $("#minority").removeClass('gray5');
    // $("#minority").removeClass('gray4');
    // $("#minority").removeClass('gray3');
    // $("#minority").removeClass('gray2');
    // // $("#minority").removeClass('gray1');
    // $("#poverty,#freelunch").removeClass('gray5');
    // $("#poverty,#freelunch").removeClass('gray4');
    // $("#poverty,#freelunch").removeClass('gray3');
    // $("#poverty,#freelunch").removeClass('gray2');
    // $("#poverty,#freelunch").removeClass('gray1');
    // $("#categoryR,#categoryM").removeClass('better');
    // $("#categoryR,#categoryM").removeClass('worse');
    // $("#categoryR,#categoryM").removeClass('expected');
    // $("#categoryR,#categoryM").removeClass('nan');

    // switchChart(d.school,d.district);

    // for (var k=0; k < data.length; k++){
    //   if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "16 to 17"){
    //     $("#categoryM").html(data[k].category);
    //     $("#categoryR").html(d.category);
    //     $("#mPCT").html(d3.format("%")(data[k].profpct) + " proficiency");
    //     $("#rPCT").html(d3.format("%")(d.profpct) + " proficiency");
    //     $("#mPCTP").html(d3.format("%")(data[k].predicted) + " predicted");
    //     $("#rPCTP").html(d3.format("%")(d.predicted) + " predicted");
    //     if (data[k].category == "About as expected") { gradeShade2 = "expected"; }
    //     if (data[k].category == "Falling short") { gradeShade2 = "worse"; }
    //     if (data[k].category == "Better than expected") { gradeShade2 = "better"; }
    //     if (data[k].category == "Not enough students tested") { gradeShade2 = "nan"; }
    //   }
    // }

    // var freelunchPCT = d.freelunch / d.enrollment;

    // if (freelunchPCT >= .70) { lunchShade = "gray5"; }
    // else if (freelunchPCT >= .50) { lunchShade = "gray4"; }
    // else if (freelunchPCT >= .40) { lunchShade = "gray3"; }
    // else if (freelunchPCT >= .20) { lunchShade = "gray2"; }
    // else if (freelunchPCT >= 0) { lunchShade = "gray1"; }

    // if (d.minoritypct >= .70) { raceShade = "gray5"; }
    // else if (d.minoritypct >= .50) { raceShade = "gray4"; }
    // else if (d.minoritypct >= .40) { raceShade = "gray3"; }
    // else if (d.minoritypct >= .20) { raceShade = "gray2"; }
    // else if (d.minoritypct >= 0) { raceShade = "gray1"; }

    // if (d.povertypct >= .70) { povShade = "gray5"; }
    // else if (d.povertypct >= .50) { povShade = "gray4"; }
    // else if (d.povertypct >= .40) { povShade = "gray3"; }
    // else if (d.povertypct >= .20) { povShade = "gray2"; }
    // else if (d.povertypct >= 0) { povShade = "gray1"; }

    // if (d.category == "About as expected") { gradeShade = "expected"; }
    // if (d.category == "Falling short") { gradeShade = "worse"; }
    // if (d.category == "Better than expected") { gradeShade = "better"; }
    // if (d.category == "Not enough students tested") { gradeShade = "nan"; }

    // $("#schoolname").html(d.school);
    // $("#district").html(d.district);
    // $("#enrolled").html(d3.format(",")(d.enrollment));
    // $("#type").html(d.type);
    // $("#location").html(" (" + d.location + ")");
    // $("#category").html(d.category);
    // $("#freelunch").html(d3.format("%")(freelunchPCT));
    // $("#poverty").html(d3.format("%")(d.povertypct));
    // // $("#povertycat").html(d.povertycat);
    // $("#minority").html(d3.format("%")(d.minoritypct));

    // $("#freelunch").addClass(lunchShade);
    // // $("#minority").addClass(raceShade);
    // $("#poverty").addClass(povShade);
    // $("#categoryR").addClass(gradeShade);
    // $("#categoryM").addClass(gradeShade2);

  })
  .html(function(d){ 
    if (currentDistrict != d.district){
      currentDistrict = d.district;
      // $("#listedSchools").append("<li class='district'>" + currentDistrict + "</li>");
    }

    var colorCode = "";

    var category;
        for (var k=0; k < data.length; k++){
      if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "16 to 17"){
        category = data[k].category;
      }
    }

    if ((category == "Better than expected") && (d.category == "Better than expected")) {
      colorCode = "both";
    }
    else if (d.category == "Better than expected") {
      colorCode = "reading";
    } else {
      colorCode = "math";
    }

    return "<div class='schoolName " + colorCode + "''>" + d.school + "</div><div class='districtName'>" + currentDistrict + " (" + d.county + ")</div><div class='bigPCT titles'>Reading <span id='categoryR'>" + d.category + "</span></div><div class='bigPCT titles'>Math <span id='categoryM'>" + category + "</span></div><div class='bigPCT' id='rPCT'>" + d3.format("%")(switchChart(d.school,d.district)[1][1]) + " proficiency</div><div class='bigPCT' id='mPCT'>" + d3.format("%")(switchChart(d.school,d.district)[2][1]) + " proficiency</div><div class='bigPCT' id='rPCTP'>" + d3.format("%")(switchChart(d.school,d.district)[0][1]) + " predicted</div><div class='bigPCT' id='mPCTP'>"  + d3.format("%")(switchChart(d.school,d.district)[3][1]) +  " predicted</div>";
  });

  function crunchStatsP(district,all){
    var totalSchools = 0;
    var failCount = 0;
    var metCount = 0;
    var betterCount = 0;

    if (all == true){
    for (var k=0; k < data.length; k++){
      if (data[k].subject == "M" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].povertycat == "Medium") { metCount++; }
        if (data[k].povertycat == "High") { failCount++; }
        if (data[k].povertycat == "Low") { betterCount++; }

      }
    }
    } else {
    for (var k=0; k < data.length; k++){
      if (data[k].district == district && data[k].subject == "M" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].povertycat == "Medium") { metCount++; }
        if (data[k].povertycat == "High") { failCount++; }
        if (data[k].povertycat == "Low") { betterCount++; }

      }
    }
  }

    $("#failP").html(d3.format("%")(failCount / totalSchools));
    $("#metP").html(d3.format("%")(metCount / totalSchools));
    $("#betterP").html(d3.format("%")(betterCount / totalSchools));

  }

  function crunchStatsM(district,all){
    var totalSchools = 0;
    var failCount = 0;
    var metCount = 0;
    var betterCount = 0;

    if (all == true){
    for (var k=0; k < data.length; k++){
      if (data[k].subject == "M" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
    } else {
    for (var k=0; k < data.length; k++){
      if (data[k].district == district && data[k].subject == "M" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
  }

    $("#failM").html(d3.format("%")(failCount / totalSchools));
    $("#metM").html(d3.format("%")(metCount / totalSchools));
    $("#betterM").html(d3.format("%")(betterCount / totalSchools));

  }

  function crunchStatsR(district,all){
    var totalSchools = 0;
    var failCount = 0;
    var metCount = 0;
    var betterCount = 0;

    if (all == true){
    for (var k=0; k < data.length; k++){
      if (data[k].subject == "R" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
    } else {
    for (var k=0; k < data.length; k++){
      if (data[k].district == district && data[k].subject == "R" && data[k].year == "16 to 17"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
     }
    }

    $("#failR").html(d3.format("%")(failCount / totalSchools));
    $("#metR").html(d3.format("%")(metCount / totalSchools));
    $("#betterR").html(d3.format("%")(betterCount / totalSchools));

  }

    $("#districtSelect").click(function() { 
      // $("#listedSchools, #filter2").slideToggle();
      // $(".directions").toggle();
    });

    $(".district").click(function() { 
      // $("#listedSchools, #filter2").slideToggle();
      $("li.district").removeClass("selected");
      $(".cell").removeClass("selected2");
      $(this).addClass("selected");
      // $(".directions").toggle();
      $("#thisDistrict").html($(this).text());
      // $(".switch").hide();
      // $(".switch[district='" + $(this).text() + "']").show();
      crunchStatsP($(this).text(),false);
      crunchStatsM($(this).text(),false);
      crunchStatsR($(this).text(),false);
      thisDistrict = $(this).text();
    });

    $(".cell").click(function()  { 
       $(".cell").removeClass("selected2");
       $(this).addClass("selected2");
       $(".switch").hide();
       if (thisDistrict == "All Districts"){
       if ($(this).attr("type") == "R") { $(".switch[categoryr='" + $(this).attr("data") + "']").show(); }
       else if ($(this).attr("type") == "M") { $(".switch[categorym='" + $(this).attr("data") + "']").show(); }
       else if ($(this).attr("type") == "O") { $(".switch[categoryo='" + $(this).attr("data") + "']").show(); }
       else if ($(this).attr("type") == "P") { $(".switch[categoryp='" + $(this).attr("data") + "']").show(); }
       } else {  
       if ($(this).attr("type") == "R") { $(".switch[categoryr='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       else if ($(this).attr("type") == "M") { $(".switch[categorym='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       else if ($(this).attr("type") == "O") { $(".switch[categoryo='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       else if ($(this).attr("type") == "P") { $(".switch[categoryp='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       }
    });

    $('#filter_box').on("keyup search",function(i){
       $('.switch').hide();
       var txt = $('#filter_box').val();
       $('.switch').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
       });
    });

    $('#filter2 input').on("keyup search",function(i){
       $('.district').hide();
       var txt = $('#filter2 input').val();
       
       $('.district').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           } 
       });
    });

    // $(".switch").click(function()  { 
    //    $(".switch").removeClass("selected");
    //    $(this).addClass("selected");
    //    $("#instructions").hide();
    //    $("#infobox,#chart,#chartLabel").show();
    //    // map.flyTo({ center: [$(this).attr("longitude"),$(this).attr("latitude")], zoom: 9 });
    // });

    // $("#infobox,#chart,#chartLabel").hide();
    // $("#instructions").show();
    // $("#schoolname").html(data[4].school);
    // $("#district").html(data[4].district);
    // $("#enrolled").html(data[4].enrollment);
    // $("#freelunch").html(d3.format("%")(data[4].freelunch / data[4].enrollment));
    // $("#type").html(data[4].type);
    // $("#location").html(" (" + data[4].location + ")");
    // $("#categoryR").html(data[4].category);
    // $("#categoryM").html(data[5].category);
    // $("#poverty").html(d3.format("%")(data[4].povertypct));
    // $("#povertycat").html(data[4].povertycat);
    // $("#minority").html(d3.format("%")(data[4].minoritypct));
    // // $("#minority").addClass("gray1");
    // $("#poverty").addClass("gray3");
    // $("#freelunch").addClass("gray3");
    // $("#categoryR,#categoryM").addClass("better");
    // $("#mPCT").html(d3.format("%")(data[4].profpct) + " proficiency");
    // $("#rPCT").html(d3.format("%")(data[5].profpct) + " proficiency");
    // $("#mPCTP").html(d3.format("%")(data[4].predicted) + " predicted");
    // $("#rPCTP").html(d3.format("%")(data[5].predicted) + " predicted");
    // crunchStatsP("",true);
    // crunchStatsM("",true);
    // crunchStatsR("",true);

    $(".zoom").on("click keyup search", function() {
        $(".switch").show();
        $(".switcher").show();
        $("#aboutThis").hide();
        $("li.district").show();
        $('#listedSchools').animate({scrollTop : 0},800);
    return false;
    });

    $("#about").on("click", function() {
        $(".switcher").toggle();
    });

    $(".legendary").on("click", function() {
        $(".switch").hide();
        $("li.district").hide();
        $("." + $(this).attr("data")).show();
    });



function switchChart(name,district){

var axis = [];

axis[0] = 'x';
// axis[1] = "'12 to '13";
// axis[2] = "'13 to '14";
// axis[3] = "'14 to '15";
// axis[4] = "'15 to '16";

var indexYear = 1;
var dataR = [];
var dataM = [];

dataR[0] = "Reading";
dataM[0] = "Math";
dataRP = 0;
dataMP = 0;

var found = false;

var mProf = ["M Score",null,null,null,null];
var mPred = ["M Predicted",null,null,null,null];
var rProf = ["R Score",null,null,null,null];
var rPred = ["R Predicted",null,null,null,null];

var shortAxis = ["x","R Score","R Precicted","M Score","M Predicted"]

for (var i=0; i < data.length; i++){
  if (name == data[i].school && district == data[i].district){
    found = true;

    if (data[i].subject == 'R'){
      dataR[indexYear] = data[i].profpct;
      axis[indexYear] = data[i].year;
      indexYear++;
      dataRP = data[i].predicted;
    }
    
  }
}

rProf[1] = dataR[dataR.length-1]
rPred[1] = dataRP;

indexYear = 1;

for (var i=0; i < data.length; i++){
  if (name == data[i].school && district == data[i].district){
    found = true;

    if (data[i].subject == 'M'){
      dataM[indexYear] = data[i].profpct;
      // axis[indexYear] = data[i].year;
      indexYear++;
      dataMP = data[i].predicted;
    }
    
  }
}

mProf[1] = dataM[dataM.length-1]
mPred[1] = dataMP;

if (dataR.length > dataM.length) { dataM[dataM.length] = 0; }
else if (dataR.length < dataM.length) { dataR[dataR.length] = 0; }

// if (found == true){

// var  padding = {
//         top: 20,
//         right: 60,
//         bottom: 20,
//         left: 70,
//     };

// var share = "#B0BEC5";

// var chart = c3.generate({
//         bindto: '#chart',
//         padding: padding,
//     data: {
//         x: 'x',
//         columns: [
//             shortAxis,
//             rProf,
//             rPred,
//             mProf,
//             mPred
//         ],
//         line: {
//          connectNull: true,
//         },
//         groups:[
//           ['M Score', 'M Predicted', 'R Score', 'R Predicted']
//         ],
//         type: 'bar',
//         labels: {
//             format: {
//               'M Score': function (v, id, i, j) { if (v != null) { return Math.round(v * 100) + "%"; } },
//               'M Predicted': function (v, id, i, j) { if (v != null) { return Math.round(v * 100) +  "%"; }  },
//               'R Score': function (v, id, i, j) { if (v != null) { return Math.round(v * 100) +  "%"; }  },
//               'R Predicted': function (v, id, i, j) { if (v != null) { return Math.round(v * 100) +  "%"; }  }
//              }
//           }
//     },
//     legend: {
//         show: false
//     },
//     point: {
//         // show: false
//         size: 4
//     },
//     tooltip: {
//         show: false
//     },
//     order: null,
//     transition: {
//         duration: 1300
//     },
//     color:  { pattern: ["#4C4C39","#858565","#BF603C","#E3B5A4"] },
//     axis: {
//       y: {
//             max: 1,
//             min: 0,
//             padding: {bottom: 0, top:0},
//             tick: {
//              count: 5,
//              format: d3.format('%'),
//              values: [0,0.25,0.50,0.75,1]
//             }
//         },
//         x: {
//             type: "category",
//             // categories: ["'12 to '13", "'13 to '14", "'14 to '15", "'15 to '16"],
//             // categories: ["'00 to '01","'01 to '02","'02 to '03","'03 to '04","'04 to '05","'05 to '06","'06 to '07","'07 to '08","'08 to '09","'09 to '10","'10 to '11","'11 to '12","'12 to '13", "'13 to '14", "'14 to '15", "'15 to '16"],
//             tick: {
//                 // count: 4,
//                 // rotate: -75,
//                 multiline: true
//             },
//             // height: 30
//           }
//         },
//     grid: {
//         y: {
//              lines: [
//             //     {value: rProf, text: ' ', position: 'start', class:'read'},
//             //     {value: rPred, text: ' ', position: 'start', class:'read'},
//             //     {value: mProf, text: ' ', position: 'start', class:'read'},
//             //     {value: mPred, text: ' ', position: 'start', class:'math'}
//             ]
//         }
//     }

//   });

// d3.select("#chart svg").append("text")
//     .attr("x", 170 )
//     .attr("y", 20)
//     .attr("class","mobilekill")
//     .style("text-anchor", "right")
//     .text("Proficiency to predicted comparison");
// }

//       chart.load({
//                 columns: [
//                     ["R Score",null,null,null,null],
//                     ["R Predicted",null,null,null,null],
//                     ["M Score",null,null,null,null],
//                     ["M Predicted",null,null,null,null]
//                     ]
                
//       });

//       chart.load({
//                 columns: [
//                     shortAxis,
//                     rProf,
//                     rPred,
//                     mProf,
//                     mPred
//                 ]
//       });

      var resultsArray = [rPred, rProf, mProf, mPred];

      return resultsArray;

}

// switchChart("A.C.G.C. SECONDARY");
// $('.switch').first().addClass("selected");

});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });