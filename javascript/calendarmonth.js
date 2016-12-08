function refresh (){ 
  document.getElementById("reload").innerHTML = "";
  selectDate();
}

function setToday() {
  var todaydate = new Date();
  var day = todaydate.getDate();
  var month = todaydate.getMonth();
  var year = todaydate.getYear();
  if (year < 2000) 
  year = year + 1900; 
  this.focusDay = day;
  document.getElementById("monthValue").value = month;
  document.getElementById("selectYear").value = year;
  refresh();
}

function setPreviousYear() {
  var year  = document.getElementById("selectYear").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  year--;
  document.getElementById("selectYear").value = year;
  refresh();
}

function setPreviousMonth() {
  var year  = document.getElementById("selectYear").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  if (month == 0) {
    month = 11;
    if (year > 1000) {
      year--;
      document.getElementById("selectYear").value = year;
      }
  } else { month--; }
  document.getElementById("monthValue").value = month;
refresh();
}

function setNextMonth() {
  var year  = document.getElementById("selectYear").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  if (month == 11) {
    month = 0;
    year++;
    document.getElementById("selectYear").value = year;
  } else { month++; }
  document.getElementById("monthValue").value = month;
  refresh();
}

function setNextYear() {
  var year = document.getElementById("selectYear").value;
  var day = 0;
  var month = document.getElementById("monthValue").value;
  year++;
  document.getElementById("selectYear").value = year;
  refresh();
}

function selectDate() {
  var month =   document.getElementById("monthValue").value;
  var year = document.getElementById("selectYear").value ;
  calendar(month, year);
}

function addTask(element) {
  var day = element.getAttribute('data')
  localStorage.setItem("task_date", day);
  window.open('file:///C:/Users/HalimatMercy/bootcamp-projects/calendarApp/add-task.html')
}

function calendar(Month, Year) {
  // If no parameter is passed use the current date.
  if(Month == null && Year == null) {
      date = new Date();
      day = date.getDay();
      month = date.getMonth();
      year = date.getFullYear();
} else {
    date = new Date();
    day = date.getDate();
    month = Month;
    year = Year;
}
  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentDay = new Date();
  currentDate = currentDay.getDate();
  currentMonth = currentDay.getMonth();
  currentYear = currentDay.getFullYear();

  this_month = new Date(year, month, 1);

  // Find out when this_month starts and ends.
  first_week_day = this_month.getDay();
    if (month == 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
      days_in_this_month = 29;
    } else {
      days_in_this_month = daysInAMonth[month];
  }

  calendar_html = '<table class = "monthtable" style = "background-color:#ffffff; width: 45%; margin: 0 auto 20px auto;">';
  calendar_html += '<tr><td colspan=10 style= "color:000000; text-align: center; font-size: 30px;">' + '<strong>' + months[month]  + ' '  + year + '</strong>' + '</td></tr>';
  calendar_html += '<tr style = "text-align: center;"><td><b>Sun</b></td><td><b>Mon</b></td><td><b>Tue</b></td><td><b>Wed</b></td><td><b>Thur</b></td><td><b>Fri</b></td><td><b>Sat</b></td></tr>';
  calendar_html += '<tr>';

  // Fill the first week of the month with the appropriate number of blanks.
  for(week_day = 0; week_day < first_week_day; week_day++) {
    calendar_html += '<td style = "background-color:#0; color:000000;"> </td>';
  }

  week_day = first_week_day;
  for(day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
    week_day %= 7;
    if(week_day == 0)
      calendar_html += '</tr><tr>'; 

    // Higlight the current day.
    
    if(currentDate == day_counter && currentMonth == Month && currentYear == parseInt(Year)){
      calendar_html += '<td class="month-day" style = "text-align: center; background-color: rgba(255, 58, 88, 0.9);" onclick ="addTask(this)" data="'+Year +"|"+ Month+ "|"+ day_counter+'"><b>' + day_counter + '</b></td>';}
    else{
      calendar_html += '<td class="month-day" style = "background-color:9999cc; color:000000; text-align: center;" onclick ="addTask(this)" data="'+Year +"|"+ Month+ "|"+ day_counter+'">' + day_counter + ' </td>';
    }

    week_day++;
  }

  calendar_html += '</tr>';
  calendar_html += '</table>';

  // Display the calendar.
 document.getElementById("reload").innerHTML += calendar_html;
}