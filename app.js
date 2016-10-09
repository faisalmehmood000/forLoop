  var user = prompt("Student Name" , "Enter Your Name");
                alert("Welcome " + user + "!");

                var sub = ["Math","English","Science","Biology","Chemistry",];
                   var marks=[];
                   
                for(var i = 0; i < 5; i++ ){
                    
                marks[i] = parseInt(prompt("Subject : " + sub[i] , " Enter Your Marks....."));
                var total = marks[00]+marks[01]+marks[02]+marks[03]+marks[04];
                }
               
               
                
                    document.write("Student Name : " + user);
                    document.write("<br/>");
                    for (var i = 0; i < 5; i++ ){
                    document.write("Marks of " + sub[i] + " : " + marks[i]);
                    document.write("<br/>");
                    }
                    document.write("Total Marks : " + total);
                    document.write("<br/>");
                    
                    var cong = "Congratulation " + user ;
                    var p = (total/500)*100;
                    if (p >= 90) {
                        document.write(cong + "  You got 'A' Grade ");
                    }
                      else if (p >= 70) {
                        document.write(cong + "  You got 'B' Grade ");

                    }
                      else if (p >= 50) {
                        document.write(cong + "  You got 'C' Grade ");

                    }
                      else {
                        document.write("Sorry You Are Fail :( ");}