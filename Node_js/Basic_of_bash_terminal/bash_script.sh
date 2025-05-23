

# for print in terminal
# echo "hello" 
# printf "%s\n" "variable"



# ❗COMMENTS 
# this is single line comment 

:'this 
is 
multiple 
line 
comment
'


:' ❗ Basics  of shell scripting ❗

$((i % 2))   //represents ❗number ❗ variable  in this syntax 

$variable_name   
                  //represent ❗ string ❗ variable in this two syntax
"$var1"


❗Array ❗
array_name=(item1 item2 item3)
${array_name[@]}    //Access elements

'


:'denoted a variable in bash $variable

 ./terminal.sh
hello

./terminal.bash
hello

both extension file run but in  ❗bash terminal❗

'

:'
#for ❗string❗ printing 
variable="Hello, World!"  # Hello, World!
echo $variable

var1="Hello"
var2="World"
echo "$var1 $var2"




#for ❗numbers❗ printing
n1=5
echo $((n1))   #for number values print by this syntax 

'

:'
# files and folder create using shell file
file_name="file1"

# files
# this is working
touch $file_name     # for create file
rm -f $file_name     # for delete file



# folders
dir_name="my_folder"

mkdir "$dir_name"
rmdir "$dir_name"


#create folder inside folder
parent_dir="project"
child_dir="src"
# mkdir -p "${parent_dir}/${child_dir}"
# rmdir  "${parent_dir}/${child_dir}"   #working

# rm -r $parent_dir  #working

'

:'❗loop 
for i in {1..10};do 
if [ $((i % 2)) -eq $((0)) ]; then
touch $i
echo "Successfully created: $i"
rm -f $i
echo "Deleted successfully: $i"
else
rm -f $i

fi
done     

'



