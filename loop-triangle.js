/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

let result = ""; //empty string
for (let number = 0; number < 7; number++) {
  console.log((result = result + "#")); 
}
